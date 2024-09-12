import { defineStore } from "pinia";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { computed, ref, watch } from "vue";
import ADD_TO_CART_MUTATION from "@/apollo/mutations/ADD_TO_CART_MUTATION.gql";
import UPDATE_CART_MUTATION from "@/apollo/mutations/UPDATE_CART_MUTATION.gql";
import GET_CART_QUERY from "@/apollo/queries/GET_CART_QUERY.gql";

export const useCart = defineStore("cartState", () => {
  const cart = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const cartTotals = ref({});

  const { result: cartResult, loading: cartLoading, refetch } = useQuery(GET_CART_QUERY, null, { fetchPolicy: 'network-only' });

  watch(cartResult, (newCartResult) => {
    if (newCartResult && newCartResult.cart) {
      updateCartState(newCartResult.cart);
    }
  });

  const updateCartState = (newCart) => {
    cart.value = newCart.contents.nodes.map(item => ({
      key: item.key,
      product: item.product.node,
      variation: item.variation ? item.variation.node : null,
      quantity: item.quantity,
      total: item.total,
      subtotal: item.subtotal,
      subtotalTax: item.subtotalTax
    }));

    cartTotals.value = {
      subtotal: newCart.subtotal,
      subtotalTax: newCart.subtotalTax,
      shippingTax: newCart.shippingTax,
      shippingTotal: newCart.shippingTotal,
      total: newCart.total,
      totalTax: newCart.totalTax,
      feeTax: newCart.feeTax,
      feeTotal: newCart.feeTotal,
      discountTax: newCart.discountTax,
      discountTotal: newCart.discountTotal
    };
  };

  const addToCart = async (product, quantity = 1) => {
    loading.value = true;
    error.value = null;
    try {
      // Optimistically update the local state
      const newItem = {
        key: Date.now().toString(), // Temporary key
        product: product,
        quantity: quantity,
        total: (parseFloat(product.price) * quantity).toString(),
        subtotal: (parseFloat(product.price) * quantity).toString(),
      };
      cart.value.push(newItem);

      const { mutate } = useMutation(ADD_TO_CART_MUTATION);
      await mutate({
        input: {
          productId: product.databaseId,
          quantity: quantity,
        },
      });
      await refetch();
    } catch (err) {
      console.error("Error adding to cart:", err);
      error.value = err.message || "An error occurred while adding to cart.";
      // Revert the optimistic update
      cart.value = cart.value.filter(item => item.key !== Date.now().toString());
    } finally {
      loading.value = false;
    }
  };

  const updateCartItemQuantity = async (key, quantity) => {
    loading.value = true;
    error.value = null;
    try {
      // Optimistically update the local state
      const itemIndex = cart.value.findIndex(item => item.key === key);
      if (itemIndex !== -1) {
        cart.value[itemIndex].quantity = quantity;
      }

      const { mutate } = useMutation(UPDATE_CART_MUTATION);
      await mutate({
        input: {
          items: [{ key, quantity }],
        },
      });
      await refetch();
    } catch (err) {
      console.error("Error updating cart:", err);
      error.value = err.message || "An error occurred while updating the cart.";
      // Revert the optimistic update
      await refetch();
    } finally {
      loading.value = false;
    }
  };

  const removeProductFromCart = async (key) => {
    loading.value = true;
    error.value = null;
    try {
      // Optimistically update the local state
      cart.value = cart.value.filter(item => item.key !== key);

      await updateCartItemQuantity(key, 0);
    } catch (err) {
      console.error("Error removing product from cart:", err);
      error.value = err.message || "An error occurred while removing the product from the cart.";
      // Revert the optimistic update
      await refetch();
    } finally {
      loading.value = false;
    }
  };

  const clearCart = async () => {
    loading.value = true;
    error.value = null;
    try {
      for (const item of cart.value) {
        await removeProductFromCart(item.key);
      }
    } catch (err) {
      console.error("Error clearing cart:", err);
      error.value = err.message || "An error occurred while clearing the cart.";
    } finally {
      loading.value = false;
    }
  };

  const cartQuantity = computed(() => {
    return cart.value.reduce((total, item) => total + item.quantity, 0);
  });

  const cartSubtotal = computed(() => {
    return cartTotals.value.subtotal || '0';
  });

  const cartTotal = computed(() => {
    return cartTotals.value.total || '0';
  });

  return {
    cart,
    loading,
    error,
    cartTotals,
    addToCart,
    updateCartItemQuantity,
    removeProductFromCart,
    clearCart,
    cartQuantity,
    cartSubtotal,
    cartTotal,
    refetch,
  };
});

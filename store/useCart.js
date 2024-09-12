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
      cart.value = newCartResult.cart.contents.nodes.map(item => ({
        key: item.key,
        product: item.product.node,
        variation: item.variation ? item.variation.node : null,
        quantity: item.quantity,
        total: item.total,
        subtotal: item.subtotal,
        subtotalTax: item.subtotalTax
      }));

      cartTotals.value = {
        subtotal: newCartResult.cart.subtotal,
        subtotalTax: newCartResult.cart.subtotalTax,
        shippingTax: newCartResult.cart.shippingTax,
        shippingTotal: newCartResult.cart.shippingTotal,
        total: newCartResult.cart.total,
        totalTax: newCartResult.cart.totalTax,
        feeTax: newCartResult.cart.feeTax,
        feeTotal: newCartResult.cart.feeTotal,
        discountTax: newCartResult.cart.discountTax,
        discountTotal: newCartResult.cart.discountTotal
      };
    }
  });

  const addToCart = async (product, quantity = 1) => {
    loading.value = true;
    error.value = null;
    try {
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
    } finally {
      loading.value = false;
    }
  };

  const updateCartItemQuantity = async (key, quantity) => {
    loading.value = true;
    error.value = null;
    try {
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
    } finally {
      loading.value = false;
    }
  };

  const removeProductFromCart = async (key) => {
    return updateCartItemQuantity(key, 0);
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

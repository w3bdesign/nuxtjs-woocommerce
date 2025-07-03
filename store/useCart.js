import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { useMutation } from "@vue/apollo-composable";

import ADD_TO_CART_MUTATION from "@/apollo/mutations/ADD_TO_CART_MUTATION.gql";
import UPDATE_CART_MUTATION from "@/apollo/mutations/UPDATE_CART_MUTATION.gql";
import GET_CART_QUERY from "@/apollo/queries/GET_CART_QUERY.gql";

export const useCart = defineStore(
  "cartState",
  () => {
    const cart = ref([]);
    const cartTotals = ref({});

    const {
      data: cartData,
      pending: loading,
      error,
      refresh: refetchCart,
    } = useAsyncQuery(GET_CART_QUERY);

    watch(
      cartData,
      (newCartData) => {
        if (newCartData && newCartData.cart) {
          updateCartState(newCartData.cart);
        } else if (newCartData && newCartData.cart === null) {
          updateCartState(null);
        }
      },
      { immediate: true },
    );

    const updateCartState = (newCart) => {
      if (!newCart) {
        cart.value = [];
        cartTotals.value = {};
        return;
      }
      cart.value = newCart.contents.nodes.map((item) => ({
        key: item.key,
        product: item.product.node,
        variation: item.variation ? item.variation.node : null,
        quantity: item.quantity,
        total: item.total,
        subtotal: item.subtotal,
        subtotalTax: item.subtotalTax,
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
        discountTotal: newCart.discountTotal,
      };
    };

    const { mutate: addToCartMutation, loading: addToCartLoading } =
      useMutation(ADD_TO_CART_MUTATION);
    const { mutate: updateCartMutation, loading: updateCartLoading } =
      useMutation(UPDATE_CART_MUTATION);

    const addToCart = async (product, quantity = 1) => {
      try {
        await addToCartMutation({
          input: {
            productId: product.databaseId,
            quantity: quantity,
          },
        });
        await refetchCart();
      } catch (err) {
        console.error("Error adding to cart:", err);
      }
    };

    const updateCartItemQuantity = async (key, quantity) => {
      try {
        await updateCartMutation({
          input: {
            items: Array.isArray(key) ? key : [{ key, quantity }],
          },
        });
        await refetchCart();
      } catch (err) {
        console.error("Error updating cart item quantity:", err);
        await refetchCart();
      }
    };

    const removeProductFromCart = async (key) => {
      try {
        const isLastItem = cart.value.length === 1 && cart.value[0].key === key;
        await updateCartItemQuantity(key, 0);
        if (isLastItem) {
          updateCartState(null); // Clear cart locally to update UI instantly
          await navigateTo("/");
        }
      } catch (err) {
        console.error("Error removing product from cart:", err);
      }
    };

    const clearCart = async () => {
      if (!cart.value.length) return;
      const itemKeys = cart.value.map((item) => ({
        key: item.key,
        quantity: 0,
      }));
      await updateCartItemQuantity(itemKeys);
      updateCartState(null); // Clear cart locally
    };

    const cartQuantity = computed(() => {
      return cart.value.reduce((total, item) => total + item.quantity, 0);
    });

    const cartSubtotal = computed(() => {
      return cartTotals.value.subtotal || "0";
    });

    const cartTotal = computed(() => {
      return cartTotals.value.total || "0";
    });

    return {
      cart,
      loading: computed(
        () =>
          loading.value || addToCartLoading.value || updateCartLoading.value,
      ),
      error,
      cartTotals,
      addToCart,
      updateCartItemQuantity,
      removeProductFromCart,
      clearCart,
      cartQuantity,
      cartSubtotal,
      cartTotal,
      refetch: refetchCart,
    };
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage,
      paths: ["cart", "cartTotals"],
    },
  },
);

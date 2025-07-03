import { defineStore } from "pinia";
import { useMutation } from "@vue/apollo-composable";
import { computed, ref } from "vue";

import ADD_TO_CART_MUTATION from "@/apollo/mutations/ADD_TO_CART_MUTATION.gql";
import UPDATE_CART_MUTATION from "@/apollo/mutations/UPDATE_CART_MUTATION.gql";
import GET_CART_QUERY from "@/apollo/queries/GET_CART_QUERY.gql";

export const useCart = defineStore(
  "cartState",
  () => {
    const cart = ref([]);
    const loading = ref(false);
    const error = ref(null);
    const cartTotals = ref({});

    const { $apollo } = useNuxtApp();

    const fetchCart = async () => {
      try {
        const { data } = await useAsyncData("cart", async () => {
          const { data } = await $apollo.client.query({
            query: GET_CART_QUERY,
            fetchPolicy: "network-only",
          });
          return data.cart;
        });

        if (data.value) {
          updateCartState(data.value);
        }
      } catch (e) {
        error.value = e;
      }
    };

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
        await fetchCart();
      } catch (err) {
        error.value = err;
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
        await fetchCart();
      } catch (err) {
        error.value = err;
        await fetchCart();
      } finally {
        loading.value = false;
      }
    };

    const removeProductFromCart = async (key) => {
      try {
        const isLastItem = cart.value.length === 1;
        await updateCartItemQuantity(key, 0);
        if (isLastItem) {
          await navigateTo("/");
        }
      } catch (err) {
        error.value = err;
      }
    };

    const clearCart = async () => {
      const itemKeys = cart.value.map((item) => ({ key: item.key, quantity: 0 }));
      await updateCartItemQuantity(itemKeys);
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
      fetchCart,
    };
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage,
      paths: ["cart", "cartTotals"],
    },
  },
);

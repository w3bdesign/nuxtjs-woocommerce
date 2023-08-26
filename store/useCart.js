import { defineStore } from "pinia";

/**
 * Manages a shopping cart store using the Pinia library.
 *
 * @typedef {Object} CartState
 * @property {Array} cart - The array representing the cart.
 * @property {boolean} loading - The loading status of the cart.
 * @property {string|null} error - The error message, if any.
 */

const state = {
  cart: [],
  loading: true,
  error: null,
};

export const useCart = defineStore("cartState", {
  state: () => state,
  actions: {
    addToCart(product) {
      const foundProductInCartIndex = this.cart.findIndex(
        (cartproduct) => product.slug === cartproduct.slug
      );

      if (foundProductInCartIndex > -1) {
        this.cart[foundProductInCartIndex].quantity += 1;
      } else {
        product.quantity = 1;
        this.cart.push(product);
      }
    },
    removeProductFromCart(product) {
      this.cart.splice(this.cart.indexOf(product), 1);
    },
    clearCart() {
      this.cart.length = 0;
    },
  },
  getters: {
    getCartQuantity() {
      return this.cart.reduce((total, product) => total + product.quantity, 0);
    },

    getCartTotal() {
      const currencySymbol = useRuntimeConfig().public.currencySymbol || "kr";

      return this.cart.reduce(
        (total, product) =>
          total +
          Number(product.price.replace(currencySymbol, "")) * product.quantity,
        0
      );
    },
  },
  persist: true,
});

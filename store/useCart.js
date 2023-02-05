import { defineStore } from "pinia";

const state = {
  cart: [],
  order: {},
  customer: {},
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
    clearCustomer() {
      this.customer = {};
    },
    clearOrder() {
      this.order = {};
    },
    saveCustomerDetails(customer) {
      this.customer = customer;
    },
    saveOrderId(order) {
      this.order = order;
    },
    getSingleProduct(slug) {
      return this.products.find((product) => product.slug === slug);
    },
  },
  getters: {
    getCartQuantity() {
      return this.cart.reduce((total, product) => total + product.quantity, 0);
    },
    getOrderDetails() {
      return this.order;
    },
    getCartContent() {
      return this.cart;
    },
    getCustomerDetails() {
      return this.customer;
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

import { defineStore } from "pinia";

const state = {
  cart: [],
  order: {},
  customer: {},
  loading: true,
  error: null,
};

export const useCart = defineStore("shopState", {
  state: () => state,
  actions: {
    async getProductsFromApi() {
      try {
        this.loading = true;
        const response = await axios.get("/api/products");
        this.products = response.data;
        this.loading = false;
      } catch (error) {
        this.error = error;
      }
    },
    addToCart({ item }) {
      const foundProductInCartIndex = this.cart.findIndex(
        (cartItem) => item.slug === cartItem.slug
      );

      if (foundProductInCartIndex > -1) {
        this.cart[foundProductInCartIndex].quantity += 1;
      } else {
        item.quantity = 1;
        this.cart.push(item);
      }
    },
    removeProductFromCart({ item }) {
      this.cart.splice(this.cart.indexOf(item), 1);
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
      return this.cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
  },
  persist: true,
});

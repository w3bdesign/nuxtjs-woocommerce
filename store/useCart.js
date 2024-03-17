import { defineStore } from "pinia";

import ADD_TO_CART_MUTATION from "@/apollo/mutations/ADD_TO_CART_MUTATION.gql";

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
    async addToCart(product) {
      this.loading = true;
      try {
        console.log("Adding to cart:", product);
        console.log("Adding product.databaseId to cart:", product.databaseId);

        const { mutate } = useMutation(ADD_TO_CART_MUTATION);
        const response = await mutate({
          input: {
            productId: product.databaseId,
            quantity: 1, // Assuming you're adding one product at a time
          },
        });

        if (response.data && response.data.addToCart) {
          console.log("Response from Add To Cart mutation:", response);

          console.log(
            "Second Response from Add To Cart mutation: ",
            response.data.addToCart.cartItem
          );

          // Update local cart state with the response if needed
          // For example, if the mutation returns the updated cart
          //this.cart = response.data.addToCart.cart;
          
        } else {
          // If the mutation doesn't return the updated cart,
          // update the local state as before
          const foundProductInCartIndex = this.cart.findIndex(
            (cartProduct) => product.slug === cartProduct.slug
          );

          if (foundProductInCartIndex > -1) {
            this.cart[foundProductInCartIndex].quantity += 1;
          } else {
            const productCopy = { ...product, quantity: 1 };
            this.cart.push(productCopy);
          }
        }
      } catch (error) {
        this.error = error.message || "An error occurred while adding to cart.";
      } finally {
        this.loading = false;
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
    /*    
    
    getCartQuantity() {
      return this.cart.reduce((total, product) => total + product.quantity, 0);
    },
    */

    getCartQuantity() {
      if (!this.cart) {
        console.error('Cart is undefined');
        return 0;
      }
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

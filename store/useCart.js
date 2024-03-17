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
          this.loading = false;
          // Assuming the response returns the updated cart item, we need to handle it properly
          const newCartItem = response.data.addToCart.cartItem;
          const foundProductInCartIndex = this.cart.findIndex(
            (cartProduct) => newCartItem.product.node.slug === cartProduct.slug
          );

          if (foundProductInCartIndex > -1) {
            this.cart[foundProductInCartIndex].quantity += newCartItem.quantity;
          } else {
            // We need to construct a cart item that matches the expected structure in `this.cart`
            const productCopy = {
              ...newCartItem.product.node,
              quantity: newCartItem.quantity,
              price: newCartItem.total, // Assuming 'total' is the price for one item
              slug: newCartItem.product.node.slug,
            };
            this.cart.push(productCopy);
          }
        } else {
          // Handle the case where the mutation does not return the expected data
          this.error = "Did not receive expected cart data from the server.";
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

      //console.log("Cart is:", this.cart);
      

      if (!this.cart) {
        console.error("Cart is undefined");
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

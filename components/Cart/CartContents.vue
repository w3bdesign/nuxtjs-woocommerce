<template>
  <div v-if="isLoading && cartItems.length === 0">
    <h2 class="mt-64 text-3xl text-center">Loading cart...</h2>
  </div>
  <div v-else-if="error && cartItems.length === 0">
    <h2 class="mt-64 text-3xl text-center text-red-500">
      Error loading cart. Please try again.
    </h2>
  </div>
  <div v-else-if="cartItems.length">
    <h1 class="h-10 p-6 text-3xl font-bold text-center">
      Cart
      <span v-if="isLoading" class="text-sm text-gray-500 ml-2">(updating...)</span>
    </h1>
    <section class="mt-10" :class="{ 'opacity-70': isLoading }">
      <CartItem
        v-for="product in cartItems"
        :key="product.key"
        :product="product"
        @remove="handleRemoveProduct"
        @update-quantity="handleUpdateQuantity"
      />
    </section>
    <CommonButton v-if="showCheckoutButton" link-to="/checkout" center-button>
      CHECKOUT
    </CommonButton>
  </div>
  <h2 v-else class="mt-64 text-3xl text-center">Cart is currently empty</h2>
</template>

<script setup>
/**
 * Vue.js component for handling the logic of removing a product from the cart and updating the cart state.
 *
 * @module CartContents
 * @returns {Object} The Vue.js component object.
 */
import { computed } from "vue";
import { useCart } from "@/store/useCart";

const props = defineProps({
  showCheckoutButton: {
    type: Boolean,
    default: false,
  },
});

const cart = useCart();

// Use the store's reactive state directly
const isLoading = computed(() => cart.loading);
const error = computed(() => cart.error);
const cartItems = computed(() => cart.cart);

/**
 * Handles the removal of a product.
 *
 * @param {string} key - The key of the product to be removed.
 */
const handleRemoveProduct = async (key) => {
  try {
    await cart.removeProductFromCart(key);
  } catch (error) {}
};

/**
 * Handles updating the quantity of a cart item.
 *
 * @param {{ key: string, quantity: number }} payload
 */
const handleUpdateQuantity = async ({ key, quantity }) => {
  try {
    await cart.updateCartItemQuantity(key, quantity);
  } catch (error) {
    // Optionally, add user notification here
  }
};
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  max-width: 1380px;
  @apply border border-gray-300 rounded-lg shadow;
}

.item {
  @apply lg:m-2 xl:m-4 xl:w-1/6 lg:w-1/6 sm:m-2 w-auto;
}

.item-content {
  @apply inline-block mt-4 w-20 h-12 md:w-full lg:w-full xl:w-full;
}

.removing {
  @apply animate-spin cursor-not-allowed;
}
</style>

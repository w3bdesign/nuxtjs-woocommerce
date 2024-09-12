<template>
  <div v-if="cartItems.length">
    <h1 class="h-10 p-6 text-3xl font-bold text-center">Cart</h1>
    <section class="mt-10">
      <CartItem
        v-for="product in cartItems"
        :key="product.key"
        :product="product"
        @remove="handleRemoveProduct"
      />
    </section>
    <CommonButton link-to="/checkout" center-button>
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
import { computed } from 'vue';
import { useCart } from "@/store/useCart";
import CommonButton from '@/components/common/CommonButton.vue';

const cart = useCart();

const cartItems = computed(() => cart.cart);

/**
 * Handles the removal of a product.
 *
 * @param {Object} product - The product to be removed.
 */
const handleRemoveProduct = async (product) => {
  try {
    await cart.removeProductFromCart(product.key);
  } catch (error) {
    console.error('Error removing product from cart:', error);
    // You might want to show an error message to the user here
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

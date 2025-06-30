<template>
  <div class="container mx-auto mt-4 flex-container">
    <div class="item">
      <span class="block mt-2 font-extrabold">Remove: <br /></span>
      <span class="item-content">
        <nuxt-img
          class="mt-2 ml-4 cursor-pointer"
          :class="{ removing: isRemoving }"
          alt="Remove icon"
          aria-label="Remove"
          src="/svg/Remove.svg"
          @click="emitRemove"
        />
      </span>
    </div>
    <div class="item">
      <span class="block mt-2 font-extrabold">Name: <br /></span>
      <span class="item-content">{{ product.product.name }}</span>
    </div>
    <div class="item">
      <span class="block mt-2 font-extrabold">Quantity: <br /></span>
      <span class="item-content">
        <QuantityInput
          :model-value="localQuantity"
          :min="1"
          :loading="isUpdating"
          @update:modelValue="onQuantityChange"
        />
      </span>
    </div>
    <div class="item">
      <span class="block mt-2 font-extrabold">Subtotal: <br /></span>
      <span class="item-content">{{ formatPrice(product.total) }}</span>
    </div>
  </div>
</template>

<script setup>
/**
 * Vue component representing a product item in a shopping cart.
 *
 * @component CartItem
 *
 * @prop {Object} product - The product object containing information about the product.
 * @prop {Object} product.product - The product details.
 * @prop {string} product.product.name - The name of the product.
 * @prop {number} product.quantity - The quantity of the product.
 * @prop {string} product.total - The subtotal of the product.
 * @prop {string} product.key - The unique key for the cart item.
 *
 * @emits CartItem#remove - Emitted when the remove button is clicked.
 */

import { ref, watch } from "vue";
import { formatPrice } from "@/utils/functions";
import QuantityInput from "@/components/common/QuantityInput.vue";

const isRemoving = ref(false);
const isUpdating = ref(false);
const localQuantity = ref(props.product.quantity);

watch(
  () => props.product.quantity,
  (newVal) => {
    localQuantity.value = newVal;
  }
);

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["remove", "update-quantity"]);

/**
 * Emits a "remove" event with the product's key as the payload.
 */
const emitRemove = () => {
  isRemoving.value = true;
  emit("remove", props.product.key);
};

const onQuantityChange = (newQuantity) => {
  if (newQuantity === props.product.quantity || isUpdating.value) return;
  isUpdating.value = true;
  emit("update-quantity", { key: props.product.key, quantity: newQuantity });
  // UI disables controls while updating; parent resets isUpdating via prop or reactivity
  setTimeout(() => {
    isUpdating.value = false;
  }, 1000);
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

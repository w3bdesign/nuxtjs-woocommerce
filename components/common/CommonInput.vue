<template>
  <div class="flex items-center gap-2">
    <button
      aria-label="Decrease quantity by one"
      class="minus-button text-xl w-8 h-[34px] flex items-center justify-center rounded bg-gray-100 hover:bg-gray-200 transition disabled:text-gray-300 disabled:cursor-not-allowed"
      :disabled="loading || value <= min"
      @click="updateValue(value - 1)"
      type="button"
    >-</button>
    <input
      type="tel"
      pattern="\d*"
      maxlength="3"
      :value="value"
      @input="onInput"
      class="quantity product-qty border-0 h-[34px] max-w-[50px] text-center bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
      :disabled="loading"
      aria-label="Quantity"
      autocomplete="off"
      inputmode="numeric"
    />
    <button
      aria-label="Increase quantity by one"
      class="plus-button text-xl w-8 h-[34px] flex items-center justify-center rounded bg-gray-100 hover:bg-gray-200 transition disabled:text-gray-300 disabled:cursor-not-allowed"
      :disabled="loading || (max !== null && value >= max)"
      @click="updateValue(value + 1)"
      type="button"
    >+</button>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  min: {
    type: Number,
    default: 1,
  },
  max: {
    type: Number,
    default: null,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const value = computed(() => props.modelValue);

function updateValue(newValue) {
  if (props.loading) return;
  if (props.max !== null && newValue > props.max) return;
  if (newValue < props.min) return;
  emit("update:modelValue", newValue);
}

function onInput(e) {
  const newValue = Number(e.target.value.replace(/\D/g, ""));
  if (props.max !== null && newValue > props.max) return;
  if (newValue < props.min) return;
  emit("update:modelValue", newValue);
}
</script>

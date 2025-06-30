<template>
  <div
    class="flex items-center border border-gray-200 rounded-xl bg-white px-2 py-1 min-w-[120px] w-fit h-10 justify-center gap-1"
  >
    <button
      class="bg-transparent border-none text-gray-900 text-xl w-9 h-9 flex items-center justify-center rounded-lg transition-colors select-none disabled:text-gray-300 disabled:cursor-not-allowed active:bg-gray-100"
      :disabled="loading || value <= min"
      @click="updateValue(value - 1)"
      aria-label="Decrease quantity"
      type="button"
    >-</button>
    <div class="border-l border-gray-200 h-6 mx-1"></div>
    <span class="min-w-8 text-center font-medium text-lg text-gray-900 px-2 select-none">{{ value }}</span>
    <div class="border-l border-gray-200 h-6 mx-1"></div>
    <button
      class="bg-transparent border-none text-gray-900 text-xl w-9 h-9 flex items-center justify-center rounded-lg transition-colors select-none disabled:text-gray-300 disabled:cursor-not-allowed active:bg-gray-100"
      :disabled="loading || (max !== null && value >= max)"
      @click="updateValue(value + 1)"
      aria-label="Increase quantity"
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
</script>

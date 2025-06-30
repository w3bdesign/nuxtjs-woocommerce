<template>
  <div class="flex items-center space-x-2">
    <button
      class="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
      :disabled="loading || value <= min"
      @click="updateValue(value - 1)"
      aria-label="Decrease quantity"
    >
      -
    </button>
    <input
      type="number"
      :value="value"
      :min="min"
      :max="max"
      class="w-12 text-center border rounded"
      :disabled="loading"
      @input="onInput"
    />
    <button
      class="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
      :disabled="loading || (max !== null && value >= max)"
      @click="updateValue(value + 1)"
      aria-label="Increase quantity"
    >
      +
    </button>
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
  const newValue = Number(e.target.value);
  updateValue(newValue);
}
</script>

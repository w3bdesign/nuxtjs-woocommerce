<template>
  <label class="flex items-center space-x-2 cursor-pointer">
    <input type="checkbox" class="form-checkbox h-4 w-4 text-blue-600 rounded" disabled />
    <span class="text-sm">{{ label }}</span>
  </label>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
});
</script>

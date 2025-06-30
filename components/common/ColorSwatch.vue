<template>
  <span
    class="inline-block w-8 h-8 rounded-full border-2 border-white shadow"
    :style="{ backgroundColor: color }"
    :title="title"
  ></span>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: '#3b82f6', // Tailwind blue-500
  },
  title: {
    type: String,
    default: '',
  },
});
</script>

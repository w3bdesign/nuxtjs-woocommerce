<template>
  <div class="flex justify-center">
    <button type="submit">SUBMIT ORDER</button>
  </div>
</template>

<script>
export default {
  props: {
    cart: { type: Object, required: false, default: null },
  },
}
</script>

<style scoped>
button {
  @apply w-48 h-12 px-4 py-2 mt-12 font-bold text-white bg-blue-500 rounded hover:bg-blue-800;
}
</style>

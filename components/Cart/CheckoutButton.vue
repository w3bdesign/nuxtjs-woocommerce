<template>
  <div class="flex justify-center">
    <NuxtLink to="/checkout" class="button-link">
      <button>CHECKOUT</button>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'CheckoutButton',
}
</script>

<style scoped>
button {
  @apply w-48 h-12 px-4 py-2 mt-12 font-bold text-white bg-blue-500 rounded hover:bg-blue-800;
}

.button-link {
  border-bottom: none;
}
</style>

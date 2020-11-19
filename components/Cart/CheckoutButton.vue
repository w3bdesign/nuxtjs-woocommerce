<template>
  <NuxtLink to="/checkout">
    <button
      class="w-48 h-12 px-4 py-2 mt-12 font-bold text-white bg-blue-500 rounded hover:bg-blue-800"
    >
      CHECKOUT
    </button>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    cart: { type: Object, required: false, default: null },
  },
}
</script>

<template>
  <button
    class="w-48 h-12 px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-800"
    @click="addProductToCart(product)"
  >
    ADD TO CART
  </button>
</template>

<script>
export default {
  props: {
    product: { type: Object, required: true },
  },
  methods: {
    addProductToCart(product) {
      this.$store.commit('addProductToCart', product)
    },
  },
}
</script>

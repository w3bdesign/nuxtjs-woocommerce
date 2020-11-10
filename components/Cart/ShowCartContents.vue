<template>
  <div>
    <h1 class="h-10 p-6 text-3xl font-bold text-center">Cart</h1>
    <div class="container flex flex-wrap items-center mx-auto">
      <pre>{{ cartContents }}</pre>
      <br />
      <button
        class="w-48 h-12 px-4 py-2 mx-auto mt-12 font-bold text-white bg-blue-500 rounded hover:bg-blue-800"
      >
        CHECKOUT
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartContents() {
      return this.$store.state.cart
    },
  },
}
</script>

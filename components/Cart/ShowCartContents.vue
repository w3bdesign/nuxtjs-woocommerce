<template>
  <div container mx-auto>
    <h1 class="h-10 p-6 text-3xl font-bold text-center">Cart</h1>

    <pre v-if="cartContents.length !== 0">{{ cartContents }}</pre>
    <br />
    <NuxtLink to="/checkout">
      <button
        v-if="cartContents.length !== 0"
        class="w-48 h-12 px-4 py-2 mx-auto mt-12 font-bold text-white bg-blue-500 rounded hover:bg-blue-800"
      >
        CHECKOUT
      </button>
    </NuxtLink>
    <br />

    <h2 v-if="cartContents.length === 0" class="m-4 text-3xl text-center">
      Cart is currently empty
    </h2>
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

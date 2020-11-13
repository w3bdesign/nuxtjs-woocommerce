<template>
  <div container mx-auto>
    <h1 class="h-10 p-6 text-3xl font-bold text-center">Cart</h1>
    <pre v-if="cartIsNotEmpty">{{ cartContents }}</pre>
    <br />
    <NuxtLink to="/checkout">
      <button
        v-if="cartIsNotEmpty"
        class="w-48 h-12 px-4 py-2 mt-12 font-bold text-white bg-blue-500 rounded hover:bg-blue-800"
      >
        CHECKOUT
      </button>
    </NuxtLink>
    <br />

    <h2 v-if="cartIsEmpty" class="m-4 text-3xl text-center">
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
    cartIsNotEmpty() {
      return this.cartContents.length !== 0
    },
    cartIsEmpty() {
      return this.cartContents.length === 0
    },
  },
}
</script>

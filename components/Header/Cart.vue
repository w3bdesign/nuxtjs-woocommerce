<template>
  <div>
    <NuxtLink to="/cart">
      <span class="text-xl text-white no-underline lg:text-black is-active">
        <img class="h-12" aria-label="Cart" src="~/assets/Cart.svg"
      /></span>

      <span
        class="absolute w-6 h-6 pb-2 -mt-12 text-center text-white bg-black rounded-full"
      >
        1
      </span>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    cartCount() {
      return this.$store.state
    },
  },
}
</script>

<style></style>

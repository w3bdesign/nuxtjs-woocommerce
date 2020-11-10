<template>
  <div>
    <NuxtLink to="/cart">
      <span class="text-xl text-white no-underline lg:text-black is-active">
        <img
          alt="Cart icon"
          class="h-12"
          aria-label="Cart"
          src="~/assets/Cart.svg"
      /></span>

      <transition name="cart">
        <span
          v-if="cartIsNotEmpty"
          :key="cartCount"
          class="absolute w-6 h-6 pb-2 -mt-12 text-center text-white bg-black rounded-full"
        >
          {{ cartCount }}
        </span>
      </transition>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    cartCount() {
      return this.$store.state.cart.length
    },
    cartIsNotEmpty() {
      return this.$store.state.cart.length !== 0
    },
  },
}
</script>

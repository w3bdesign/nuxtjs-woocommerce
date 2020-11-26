<template>
  <div>
    <NuxtLink to="/cart">
      <transition name="cart">
        <span
          v-if="cartLength"
          class="text-xl text-white no-underline lg:text-black is-active"
        >
          <img
            alt="Cart icon"
            class="h-12"
            aria-label="Cart"
            src="~/assets/Cart.svg"
        /></span>
      </transition>
      <transition name="cart">
        <div v-if="cartLength">
          <span
            class="absolute w-6 h-6 pb-2 ml-12 -mt-12 text-center text-white bg-black rounded-full"
          >
            {{ cartLength }}
          </span>
          <span>Total: {{ subTotal }}</span>
        </div>
      </transition>
    </NuxtLink>
  </div>
</template>

<script>
import useFetchWooCart from '@/hooks/useFetchWooCart'

export default {
  name: 'Cart',
  data() {
    return {
      remoteCart: null,
      remoteError: null,
      cartLength: null,
      subTotal: null,
    }
  },
  async mounted() {
    const {
      remoteCart,
      cartLength,
      subTotal,
      remoteError,
    } = await useFetchWooCart(this)

    if (remoteCart) {
      this.remoteCart = remoteCart
      this.cartLength = cartLength
      this.subTotal = subTotal
    }
    if (remoteError) {
      this.remoteError = remoteError
    }
  },
}
</script>

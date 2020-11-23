<template>
  <div>
    <ShowCartContents display-remove />
    <CheckoutButton v-if="remoteCart" />
    <h2 v-if="remoteError">Error during cart loading!</h2>
  </div>
</template>

<script>
import useFetchWooCart from '@/hooks/useFetchWooCart'

export default {
  name: 'Cart',
  layout: 'Layout',
  transition: {
    name: 'home',
    mode: 'out-in',
  },
  data() {
    return {
      remoteCart: null,
      remoteError: null,
    }
  },
  async mounted() {
    const { remoteCart, remoteError } = await useFetchWooCart(this)

    if (remoteCart) {
      this.remoteCart = remoteCart
    }
    if (remoteError) {
      this.remoteError = remoteError
    }
  },
}
</script>

<template>
  <div container mx-auto>
    <h1 class="h-10 p-6 text-3xl font-bold text-center">Cart</h1>
    <pre v-if="remoteCart">{{ remoteCart }}</pre>
    <br />
    <LoadingSpinner v-if="loading" />
    <NuxtLink to="/checkout">
      <button
        v-if="remoteCart"
        class="w-48 h-12 px-4 py-2 mt-12 font-bold text-white bg-blue-500 rounded hover:bg-blue-800"
      >
        CHECKOUT
      </button>
    </NuxtLink>

    <h2 v-if="!remoteCart && !loading" class="m-4 text-3xl text-center">
      Cart is currently empty
    </h2>
  </div>
</template>

<script>
import useFetchWooCart from '@/hooks/useFetchWooCart'

export default {
  data() {
    return {
      remoteCart: null,
      remoteError: null,
      cartLength: null,
      subTotal: null,
      loading: true,
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
      this.loading = false
    }
    if (remoteError) {
      this.remoteError = remoteError
    }
  },
}
</script>

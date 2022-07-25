<template>
  <div>
    <div v-if="remoteError">
      <span class="text-xl text-red-500"
        >Error fetching cart. Please refresh the page.</span
      >
    </div>
    <div v-else>
      <NuxtLink to="/cart">
        <transition name="cart">
          <span
            v-if="cartLength"
            class="text-xl text-white no-underline lg:text-black is-active"
          >
            <img
              alt="Cart icon"
              class="h-12 ml-4 lg:ml-2"
              aria-label="Cart"
              src="~/assets/svg/Cart.svg"
          /></span>
        </transition>
        <transition name="cart">
          <div v-if="cartLength">
            <span
              class="absolute w-6 h-6 pb-2 ml-16 -mt-12 text-center text-white bg-black rounded-full lg:ml-14"
            >
              {{ cartLength }}
            </span>
            <span>Total: {{ subTotal }}</span>
          </div>
        </transition>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import GET_CART_QUERY from '@/apollo/queries/GET_CART_QUERY'

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
  mounted() {
    this.$apollo.queries.cart.refetch()
  },
  apollo: {
    cart: {
      prefetch: true,
      query: GET_CART_QUERY,
      pollInterval: process.server ? undefined : 3000,
      result({ data, loading, networkStatus }) {
        const cartIsReady = networkStatus === 7
        if (cartIsReady && !loading) {
          this.remoteCart = data
          this.subTotal = data.cart.total
          this.cartLength = data.cart.contents.nodes.reduce(
            (accumulator, argument) => accumulator + argument.quantity,
            0
          )
        }
      },
      error(error) {
        this.remoteError = error
        // Check if we are in the browser before checking localStorage
        // Will refresh the page to refetch the session from WooCommerce
        if (process.browser && !localStorage.getItem('woo-session')) {
          this.$router.push('/')
        }
      },
    },
  },
}
</script>

<template>
  <div>
    <pre v-if="remoteCart"></pre>
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
          v-if="cartLength"
          :key="cartCount"
          class="absolute w-6 h-6 pb-2 -mt-12 text-center text-white bg-black rounded-full"
        >
          {{ cartLength }}
        </span>
      </transition>
    </NuxtLink>
    <span v-if="remoteCart">Total: {{ subTotal }}</span>
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
    this.getWooCart()
  },
  methods: {
    async getWooCart() {
      try {
        await this.$apollo
          .query({
            query: GET_CART_QUERY,
          })
          .then(({ data }) => {
            this.remoteCart = data
            this.cartLength = data.cart.contents.nodes[0].quantity
            this.subTotal = data.cart.total
            console.log(data)
          })
      } catch (e) {
        this.remoteError = e
      }
    },
  },
}
// getWooCart()
</script>

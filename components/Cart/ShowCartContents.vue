<template>
  <div container mx-auto>
    <h1 class="h-10 p-6 text-3xl font-bold text-center">Cart</h1>
    <pre v-if="remoteCart">{{ remoteCart }}</pre>
    <br />
    <LoadingSpinner v-if="loading" />

    <NuxtLink to="/checkout">
      <button
        v-if="cartIsNotEmpty"
        class="w-48 h-12 px-4 py-2 mt-12 font-bold text-white bg-blue-500 rounded hover:bg-blue-800"
      >
        CHECKOUT
      </button>
    </NuxtLink>
    <br />

    <h2 v-if="!remoteCart && !loading" class="m-4 text-3xl text-center">
      Cart is currently empty
    </h2>
  </div>
</template>

<script>
import GET_CART_QUERY from '@/apollo/queries/GET_CART_QUERY'

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
            this.loading = false
          })
      } catch (e) {
        this.remoteError = e
        this.loading = false
      }
    },
  },
  /* computed: {
    cartContents() {
      return this.$store.state.cart
    },
    cartIsNotEmpty() {
      return this.cartContents.length !== 0
    },
    cartIsEmpty() {
      return this.cartContents.length === 0
    },
  }, */
}
</script>

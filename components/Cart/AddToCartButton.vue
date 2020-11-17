<template>
  <div>
    <button
      class="w-48 h-12 px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-800"
      @click="addProductToCart(product)"
    >
      ADD TO CART
    </button>
    <button
      class="w-48 h-12 px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-800"
      @click="getWooCart"
    >
      FETCH WOO CART
    </button>
  </div>
</template>

<script>
import { uid } from 'uid'

import ADD_TO_CART_MUTATION from '@/apollo/mutations/ADD_TO_CART_MUTATION'

export default {
  props: {
    product: { type: Object, required: true },
  },
  methods: {
    async addProductToWooCart(product) {
      const productId = product.databaseId ? product.databaseId : product

      const productQueryInput = {
        clientMutationId: uid(), // Generate a unique id.
        productId,
      }

      try {
        await this.$apollo
          .mutate({
            mutation: ADD_TO_CART_MUTATION,
            variables: { input: productQueryInput },
          })
          .then(({ data }) => {
            data && console.log(data)
          })
      } catch (e) {
        console.log('Error!')
        console.error(e)
      }
    },
    addProductToCart(product) {
      this.$store.commit('addProductToCart', product)
      this.addProductToWooCart(product)
    },
  },
}
</script>

<template>
  <div container mx-auto>
    <h1 class="h-10 p-6 text-3xl font-bold text-center">Cart</h1>
    <section class="mt-10">
      <div
        v-for="products in cartProducts"
        :key="products.id"
        class="mt-4 flex-container"
      >
        <div class="item">
          <span class="block mt-2 font-extrabold">Remove: <br /></span>
          <span class="item-content">
            <img
              class="mt-2 ml-4 cursor-pointer"
              alt="Remove icon"
              aria-label="Remove"
              src="@/assets/Remove.svg"
              @click="handleRemoveProduct(products)"
            />
          </span>
        </div>
        <div class="item">
          <span class="block mt-2 font-extrabold">Name: <br /></span>
          <span class="item-content">{{ products.product.name }}</span>
        </div>
        <div class="item">
          <span class="block mt-2 font-extrabold">Quantity: <br /> </span>
          <span class="item-content">
            {{ products.quantity }}
          </span>
        </div>
        <div class="item">
          <span class="block mt-2 font-extrabold">Subtotal: <br /></span>
          <span class="item-content"> {{ products.total }} </span>
        </div>
      </div>
    </section>
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
import { uid } from 'uid'

import useFetchWooCart from '@/hooks/useFetchWooCart'
import UPDATE_CART_MUTATION from '@/apollo/mutations/UPDATE_CART_MUTATION'

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
  computed: {
    cartProducts() {
      if (this.remoteCart) {
        return this.remoteCart.cart.contents.nodes
      }
      return null
    },
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
  methods: {
    async handleRemoveProduct(products) {
      const updatedItems = []
      updatedItems.push({
        key: products.key,
        quantity: 0,
      })

      try {
        await this.$apollo
          .mutate({
            mutation: UPDATE_CART_MUTATION,
            variables: {
              // input: { clientMutationId: uid, items: updatedItems },
              input: {
                clientMutationId: uid(),
                items: updatedItems,
              },
            },
          })
          .then(({ data }) => {
            this.loading = false
          })
      } catch (error) {
        this.remoteError = error
      }
    },
  },
}
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  border: 1px rgb(197, 197, 197) solid;
  max-width: 98vw;
}

.item {
  @apply lg:m-2 xl:m-4 xl:w-1/6 lg:w-1/6 sm:m-2 w-auto;
}

.item-content {
  @apply inline-block mt-4 w-20 h-12 md:w-full lg:w-full xl:w-full;
}
</style>

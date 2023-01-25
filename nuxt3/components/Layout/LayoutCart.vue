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

<script setup>
import GET_CART_QUERY from '@/apollo/queries/GET_CART_QUERY.gql'

const cartLength = useState('cartLength', () => 0)
const subTotal = useState('subTotal', '')
const remoteError = useState('remoteError', () => false)

const { data, error, pending, execute } = await useAsyncQuery(GET_CART_QUERY)

if (data) {
  cartLength.value = data.value.cart.contents.nodes.reduce(
    (accumulator, argument) => accumulator + argument.quantity,
    0
  )

  subTotal.value = data.value.cart.total

  remoteError.value = error
}

setInterval(() => {
  if (!pending.value) {
    execute()

    if (data) {
      cartLength.value = data.value.cart.contents.nodes.reduce(
        (accumulator, argument) => accumulator + argument.quantity,
        0
      )

      subTotal.value = data.value.cart.total

      remoteError.value = error
    }
  }
}, 3000)
</script>

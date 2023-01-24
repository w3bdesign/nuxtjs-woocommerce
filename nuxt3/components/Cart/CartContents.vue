
<template>
  <div>Cart siden</div>
</template>

<script setup>
import GET_CART_QUERY from '@/apollo/queries/GET_CART_QUERY.gql'

const variables = { limit: 5 }
const { data } = await useAsyncQuery(GET_CART_QUERY, variables)

console.log('Cart data: ', data)
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  max-width: 1380px;
  @apply border border-gray-300 rounded-lg shadow;
}

.item {
  @apply lg:m-2 xl:m-4 xl:w-1/6 lg:w-1/6 sm:m-2 w-auto;
}

.item-content {
  @apply inline-block mt-4 w-20 h-12 md:w-full lg:w-full xl:w-full;
}

.removing {
  @apply animate-spin cursor-not-allowed;
}
</style>

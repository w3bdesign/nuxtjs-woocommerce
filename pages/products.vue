<template>
  <div v-if="products">
    <ShowAllProducts :products="products.nodes" />
  </div>
</template>

<script>
import FETCH_ALL_PRODUCTS_QUERY from '@/apollo/queries/FETCH_ALL_PRODUCTS_QUERY.gql'

export default {
  layout: 'Layout',
  transition: {
    name: 'home',
    mode: 'out-in',
  },
  apollo: {
    products: {
      pollInterval: process.server ? undefined : 2000,
      prefetch: true,
      query: FETCH_ALL_PRODUCTS_QUERY,
    },
  },
  head: {
    title: 'NuxtJS WooCommerce - Products',
  },
}
</script>

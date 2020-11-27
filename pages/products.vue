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
      prefetch: true,
      query: FETCH_ALL_PRODUCTS_QUERY,
      pollInterval: process.server ? undefined : 2000,
    },
  },
  head: {
    title: 'NuxtJS WooCommerce - Products',
  },
}
</script>

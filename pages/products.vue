<template>
  <div v-if="products">
    <ProductsShowAllProducts :products="products.nodes" />
  </div>
  <div v-else><SpinnerLoadingSpinner /></div>
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
      pollInterval: process.server ? undefined : 3000,
    },
  },
  head: {
    title: 'NuxtJS WooCommerce - Products',
  },
}
</script>

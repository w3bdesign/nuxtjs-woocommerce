<template>
  <div>
    <ShowAllProducts :products="products.nodes" />
  </div>
</template>

<script>
import FETCH_ALL_PRODUCTS_QUERY from '@/apollo/queries/FETCH_ALL_PRODUCTS_QUERY.gql'

export default {
  layout: 'Layout',
  apollo: {
    products: {
      prefetch: true,
      query: FETCH_ALL_PRODUCTS_QUERY,
    },
  },
  head: {
    title: 'NuxtJS WooCommerce - Products',
  },
}
</script>

<template>
  <div>
    <pre>Loading: {{ loading }} </pre>
    <div v-if="!loading">
      <ShowAllProducts :products="products.nodes" />
    </div>
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
  data: () => ({
    loading: 0,
  }),
  apollo: {
    products: {
      $loadingKey: 'loading',
      // prefetch: true,
      prefetch: false,
      query: FETCH_ALL_PRODUCTS_QUERY,
    },
  },
  head: {
    title: 'NuxtJS WooCommerce - Products',
  },
}
</script>

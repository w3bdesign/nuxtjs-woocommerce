<template>
  <div>
    <IndexHero />
    <div v-if="products">
      <ProductsShowAllProducts :products="products.nodes" />
    </div>
    <div v-else>
      <SpinnerLoadingSpinner />
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
  head: {
    title: 'NuxtJS WooCommerce - Home',
  },

  apollo: {
    products: {
      prefetch: true,
      query: FETCH_ALL_PRODUCTS_QUERY,
    },
  },
}
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}
a {
  text-decoration: none;
  color: #000;
}
a:hover {
  border-bottom: 1px solid;
}
</style>

<template>
  <div>
    <Hero />
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
    title: 'NuxtJS WooCommerce - Home',
  },
  transition: {
    name: 'home',
    mode: 'out-in',
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

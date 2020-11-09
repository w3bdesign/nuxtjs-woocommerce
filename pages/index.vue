<template>
  <div>
    <Hero />
    <ShowProducts :products="products" />
  </div>
</template>

<script>
// <ShowProducts :products="products" />
// https://github.com/nuxt/nuxt.js/tree/dev/examples/vue-apollo

/*
{
    "id": "cHJvZHVjdDozMg==",
    "databaseId": 32,
    "name": "Beanie with Logo",
    "onSale": true,
    "slug": "beanie-with-logo",
    "image": {
      "sourceUrl": "https://woo.dfweb.no/wp-content/uploads/2020/10/beanie-with-logo-1.jpg",
      "__typename": "MediaItem"
    },
    "price": "kr18.00",
    "regularPrice": "kr20.00",
    "salePrice": "kr18.00",
    "__typename": "SimpleProduct"
  },
  */

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
    title: 'NuxtJS WooCommerce - Index',
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
  color: #3498db;
}
a:hover {
  border-bottom: 1px solid;
}
</style>

<template>
  <div>
    <div v-for="product in products" :key="product.id">
      <pre>{{ product }}</pre>
      <div v-for="p in product" :key="p.id">
        <p>{{ p.name }}</p>
        <p>
          <img :src="p.image && p.image.sourceUrl" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// https://github.com/nuxt/nuxt.js/tree/dev/examples/vue-apollo

import FETCH_ALL_PRODUCTS_QUERY from '@/apollo/queries/FETCH_ALL_PRODUCTS_QUERY.gql'

export default {
  apollo: {
    products: {
      prefetch: true,
      query: FETCH_ALL_PRODUCTS_QUERY,
    },
  },
  head: {
    title: 'All Products',
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

<template>
  <div>
    <div v-for="product in products" :key="product.id">
      <div v-for="p in product" :key="p.id">
        <pre>{{ p.name }} </pre>
      </div>
    </div>
  </div>
</template>

<script>
import allProducts from '@/apollo/queries/allProducts.gql'

export default {
  apollo: {
    products: {
      prefetch: true,
      query: allProducts,
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

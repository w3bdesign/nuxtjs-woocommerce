<template>
  <div v-if="data.products">
    <ProductsShowAll :products="data.products.nodes" />
  </div>
</template>

<script setup>
import FETCH_ALL_PRODUCTS_QUERY from '@/apollo/queries/FETCH_ALL_PRODUCTS_QUERY.gql'

const variables = { limit: 5 }
const { data } = await useAsyncQuery(FETCH_ALL_PRODUCTS_QUERY, variables)
</script>

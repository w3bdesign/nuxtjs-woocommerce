<template>
  <div v-if="data.products">
    <ProductsShowAll :products="data.products.nodes" />
  </div>
</template>

<script setup>
import FETCH_ALL_PRODUCTS_QUERY from '@/apollo/queries/FETCH_ALL_PRODUCTS_QUERY.gql'

const variables = { limit: 5 }
const { data } = await useAsyncQuery(FETCH_ALL_PRODUCTS_QUERY, variables)

useHead({
  title: 'Products',
  titleTemplate: '%s - Nuxt 3 Woocommerce',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'Nuxt 3 Woocommerce',
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
})
</script>

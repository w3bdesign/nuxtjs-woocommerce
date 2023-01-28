<template>
  <div v-if="data?.productCategory">
    <CategoryShowProducts :products="data.productCategory" />
  </div>
  <div v-else>
    <SpinnerLoading />
  </div>
</template>

<script setup>
import GET_PRODUCTS_FROM_CATEGORY_QUERY from '@/apollo/queries/GET_PRODUCTS_FROM_CATEGORY_QUERY.gql'

const route = useRoute()

const variables = { id: route.query.id, slug: route.params.category }
const { data } = await useAsyncQuery(
  GET_PRODUCTS_FROM_CATEGORY_QUERY,
  variables
)

useHead({
  title: route.params.category,
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

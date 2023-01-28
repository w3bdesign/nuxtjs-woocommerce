<template>
  <div v-if="data?.product">
    <ProductsSingleProduct :product="data.product" />
  </div>
  <div v-else>
    <SpinnerLoading />
  </div>
</template>

<script setup>
import GET_SINGLE_PRODUCT_QUERY from '@/apollo/queries/GET_SINGLE_PRODUCT_QUERY.gql'

const route = useRoute()

const variables = { id: route.query.id, slug: route.params.product }
const { data } = await useAsyncQuery(GET_SINGLE_PRODUCT_QUERY, variables)

useHead({
  title: route.params.product,
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

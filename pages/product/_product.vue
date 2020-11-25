<template>
  <div>
    <pre>Loading: {{ loading }} </pre>
    <div v-if="!loading">
      <ShowSingleProduct :product="product" />
    </div>
  </div>
</template>

<script>
import GET_SINGLE_PRODUCT_QUERY from '@/apollo/queries/GET_SINGLE_PRODUCT_QUERY.gql'

export default {
  name: 'Product',
  layout: 'Layout',
  transition: {
    name: 'home',
    mode: 'out-in',
  },
  data: () => ({
    loading: 0,
  }),
  apollo: {
    product: {
      $loadingKey: 'loading',
      query: GET_SINGLE_PRODUCT_QUERY,
      // prefetch: ({ id, slug }) => ({ id, slug }),
      prefetch: false,
      variables() {
        return { id: this.$route.query.id, slug: this.$route.params.product }
      },
    },
  },
}
</script>

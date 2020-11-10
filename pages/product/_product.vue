<template>
  <div>
    <ShowSingleProduct :product="product" />
  </div>
</template>

<script>
import GET_SINGLE_PRODUCT_QUERY from '@/apollo/queries/GET_SINGLE_PRODUCT_QUERY.gql'

export default {
  name: 'Product',
  layout: 'Layout',
  computed: {
    getSlug() {
      return this.$route.params.product
    },
    getID() {
      return this.$route.query.id
    },
  },
  apollo: {
    product: {
      query: GET_SINGLE_PRODUCT_QUERY,
      prefetch: ({ id, slug }) => ({ id, slug }),
      variables() {
        return { id: this.$route.query.id, slug: this.$route.params.product }
      },
    },
  },
}
</script>

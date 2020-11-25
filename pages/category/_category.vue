<template>
  <div>
    <pre>Loading: {{ loading }} </pre>
    <div v-if="!loading">
      <ShowProductsInCategory :products="productCategory" />
    </div>
  </div>
</template>

<script>
import GET_PRODUCTS_FROM_CATEGORY_QUERY from '@/apollo/queries/GET_PRODUCTS_FROM_CATEGORY_QUERY.gql'

export default {
  name: 'Category',
  layout: 'Layout',
  transition: {
    name: 'home',
    mode: 'out-in',
  },
  data: () => ({
    loading: 0,
  }),
  apollo: {
    productCategory: {
      $loadingKey: 'loading',
      query: GET_PRODUCTS_FROM_CATEGORY_QUERY,
      prefetch: ({ id, slug }) => ({ id, slug }),
      variables() {
        return { id: this.$route.query.id, slug: this.$route.params.category }
      },
    },
  },
}
</script>

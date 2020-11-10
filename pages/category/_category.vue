<template>
  <div>
    <ShowProductsInCategory :products="productCategory" />
  </div>
</template>

<script>
import GET_PRODUCTS_FROM_CATEGORY from '@/apollo/queries/GET_PRODUCTS_FROM_CATEGORY.gql'

export default {
  name: 'Category',
  layout: 'Layout',
  apollo: {
    productCategory: {
      query: GET_PRODUCTS_FROM_CATEGORY,
      prefetch: ({ id, slug }) => ({ id, slug }),
      variables() {
        return { id: this.$route.query.id, slug: this.$route.params.category }
      },
    },
  },
}
</script>

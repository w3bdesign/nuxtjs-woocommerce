<template>
  <div v-if="productCategories">
    <CategoryShowAllCategories :categories="productCategories" />
  </div>
  <div v-else>
    <SpinnerLoadingSpinner />
  </div>
</template>

<script>
import FETCH_ALL_CATEGORIES_QUERY from '@/apollo/queries/FETCH_ALL_CATEGORIES_QUERY.gql'

export default {
  layout: 'Layout',
  apollo: {
    productCategories: {
      prefetch: true,
      query: FETCH_ALL_CATEGORIES_QUERY,
    },
  },
  head: {
    title: 'NuxtJS WooCommerce - Categories',
  },
}
</script>

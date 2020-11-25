<template>
  <div>
    <pre>Loading: {{ loading }} </pre>
    <div v-if="!loading">
      <ShowAllCategories :categories="productCategories" />
    </div>
  </div>
</template>

<script>
import FETCH_ALL_CATEGORIES_QUERY from '@/apollo/queries/FETCH_ALL_CATEGORIES_QUERY.gql'

export default {
  layout: 'Layout',
  data: () => ({
    loading: 0,
  }),
  apollo: {
    productCategories: {
      $loadingKey: 'loading',
      prefetch: true,
      query: FETCH_ALL_CATEGORIES_QUERY,
    },
  },
  head: {
    title: 'NuxtJS WooCommerce - Categories',
  },
}
</script>

<template>
  <div>
    <div v-if="!productCategories">No categories</div>
    <div v-if="productCategories">
      <ShowAllCategories :categories="productCategories" />
    </div>
  </div>
</template>

<script>
import FETCH_ALL_CATEGORIES_QUERY from '@/apollo/queries/FETCH_ALL_CATEGORIES_QUERY.gql'

export default {
  layout: 'Layout',
  apollo: {
    productCategories: {
      throttle: 5000,
      error(error) {
        console.error("We've got an error!", error)
      },
      prefetch: true,
      query: FETCH_ALL_CATEGORIES_QUERY,
    },
  },
  head: {
    title: 'NuxtJS WooCommerce - Categories',
  },
}
</script>

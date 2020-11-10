<template>
  <div>
    <ShowAllCategories :categories="productCategories" />
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

<style></style>

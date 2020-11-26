<template>
  <div>
    <div v-if="!productCategories">No categories</div>
    <div v-if="productCategories">
      <ShowAllCategories :categories="productCategories" />
    </div>
  </div>
</template>

<script>
import { gql } from 'graphql-tag'
// import FETCH_ALL_CATEGORIES_QUERY from '@/apollo/queries/FETCH_ALL_CATEGORIES_QUERY.gql'

export default {
  layout: 'Layout',
  apollo: {
    productCategories: {
      error(error) {
        console.error("We've got an error!", error)
      },
      prefetch: true,
      // query: FETCH_ALL_CATEGORIES_QUERY,
      query: gql`
        query {
          productCategories {
            nodes {
              id
              name
              slug
            }
          }
        }
      `,
    },
  },
  head: {
    title: 'NuxtJS WooCommerce - Categories',
  },
}
</script>

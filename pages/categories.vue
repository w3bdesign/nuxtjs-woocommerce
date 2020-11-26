<template>
  <ShowAllCategories :categories="productCategories" />
</template>

<script>
import gql from 'graphql-tag'
// import FETCH_ALL_CATEGORIES_QUERY from '@/apollo/queries/FETCH_ALL_CATEGORIES_QUERY.gql'

export default {
  layout: 'Layout',
  apollo: {
    productCategories: {
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

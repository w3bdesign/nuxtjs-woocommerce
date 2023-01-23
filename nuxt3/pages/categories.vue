<template>
  <div v-if="data.productCategories">
    <CategoryShowAll :categories="data.productCategories" />
  </div>
  <div v-else>
    <SpinnerLoading />
  </div>
</template>

<script setup>
import FETCH_ALL_CATEGORIES_QUERY from '@/apollo/queries/FETCH_ALL_CATEGORIES_QUERY.gql'

const variables = { limit: 5 }
const { data } = await useAsyncQuery(FETCH_ALL_CATEGORIES_QUERY, variables)
</script>

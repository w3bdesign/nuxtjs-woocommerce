<template>
  <ais-instant-search-ssr>
    <ais-search-box />
    <ais-stats />
    <ais-refinement-list attribute="brand" />
    <ais-hits>
      <template slot="item" slot-scope="{ item }">
        <NuxtLink
          class="text-black cursor-pointer hover:underline"
          :to="{
            path: '/product/' + item.product_name,
            query: { id: item.objectID },
          }"
        >
          <p class="p-2 text-2xl font-bold text-center">
            {{ item.product_name }}
          </p>
        </NuxtLink>

        <p class="p-2 text-xl text-center">
          {{ item.short_description }}
        </p>
        <p class="p-2">
          <img :src="item.product_image" alt="item.product_name" />
        </p>
        <p class="p-2 text-xl text-center">
          {{ item.sale_price ? item.sale_price : item.regular_price }} kr
        </p>
      </template>
    </ais-hits>
    <ais-pagination />
  </ais-instant-search-ssr>
</template>

<script>
// TODO
/*
  Replace empty spaces with dash (-)

  const trimmedProductName = product_name.replace(/ /g, '-');
*/
import {
  AisInstantSearchSsr,
  AisRefinementList,
  AisHits,
  AisSearchBox,
  AisStats,
  AisPagination,
  createServerRootMixin,
} from 'vue-instantsearch'

import algoliasearch from 'algoliasearch/lite'

const searchClient = algoliasearch(
  process.env.AlgoliaApplicationId,
  process.env.AlgoliaSearchOnlyAPIKey
)

export default {
  components: {
    AisInstantSearchSsr,
    AisRefinementList,
    AisHits,
    AisSearchBox,
    AisStats,
    AisPagination,
  },
  mixins: [
    createServerRootMixin({
      searchClient,
      indexName: process.env.AlgoliaIndexName,
    }),
  ],
  layout: 'Layout',
  serverPrefetch() {
    return this.instantsearch.findResultsState(this).then((algoliaState) => {
      this.$ssrContext.nuxt.algoliaState = algoliaState
    })
  },

  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/algolia-min.css',
        },
      ],
    }
  },
  beforeMount() {
    const results =
      this.$nuxt.context.nuxtState.algoliaState || window.__NUXT__.algoliaState

    this.instantsearch.hydrate(results)
  },
}
</script>

<template>
  <div>
    <AisInstantSearch :index-name="indexName" :search-client="algolia">
      <AisSearchBox />
      <AisStats />
      <AisRefinementList attribute="pa_color" />
      <AisHits :class-names="{ 'ais-Hits-item': 'CustomHitsItem' }">
        <template #item="{ item }">
          <NuxtLink
            :to="`/product/${convertProductNameToSlug(item.product_name)}?id=${
              item.objectID
            }`"
          >
            <p class="p-2 text-2xl font-bold text-center">
              {{ item.product_name }}
            </p>
            <p
              class="p-2 transition duration-700 ease-in-out transform cursor-pointer hover:scale-95"
            >
              <img :src="item.product_image" alt="item.product_name" />
            </p>
            <p class="p-2 text-xl font-bold text-center">
              {{ item.sale_price ? item.sale_price : item.regular_price }} kr
            </p>
          </NuxtLink>
        </template>
      </AisHits>
      <br />
      <AisPagination />
    </AisInstantSearch>
  </div>
</template>

<script setup>
import {
  AisInstantSearch,
  AisSearchBox,
  AisRefinementList,
  AisStats,
  AisPagination,
  AisHits,
} from 'vue-instantsearch/vue3/es/index.js'

const indexName = 'dfweb'
const algolia = useAlgoliaRef()

const convertProductNameToSlug = (productName) =>
  productName.replace(/ /g, '-').toLowerCase()

useHead({
  title: 'Search',
  titleTemplate: '%s - Nuxt 3 Woocommerce',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'Nuxt 3 Woocommerce',
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
})
</script>

<style>
@media (max-width: 767px) {
  .CustomHitsItem {
    padding: 10px;
    width: 100%;
  }
}

@media (min-width: 768px) {
  .CustomHitsItem {
    width: 47%;
  }
}

@media (min-width: 1024px) {
  .CustomHitsItem {
    width: 32%;
  }
}
</style>

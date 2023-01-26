<template>
  <div v-if="props.product">
    <section>
      <div class="container flex flex-wrap items-center pt-4 pb-12 mx-auto">
        <div
          class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2"
        >
          <nuxt-img
            v-if="props.product.image !== undefined"
            id="product-image"
            class="h-auto p-8 transition duration-500 ease-in-out transform xl:p-2 md:p-2 lg:p-2 hover:grow hover:shadow-lg hover:scale-105"
            :alt="props.product.name"
            :src="props.product.image.sourceUrl"
          />
          <nuxt-img
            v-else
            id="product-image"
            class="h-auto p-8 transition duration-500 ease-in-out transform xl:p-2 md:p-2 lg:p-2 hover:grow hover:shadow-lg hover:scale-105"
            :alt="props.product.name"
            :src="process.env.placeholderSmallImage"
          />
          <div class="ml-8">
            <p class="text-3xl font-bold text-left">
              {{ props.product.name }}
            </p>
            <div v-if="props.product.onSale" class="flex">
              <p class="pt-1 mt-4 text-3xl text-gray-900">
                <span v-if="product.variations">
                  {{ filteredVariantPrice(props.product.price) }}</span
                >
                <span v-else>{{ props.product.salePrice }}</span>
              </p>
              <p class="pt-1 pl-8 mt-4 text-2xl text-gray-900 line-through">
                <span v-if="props.product.variations">
                  {{ filteredVariantPrice(props.product.price, 'right') }}</span
                >
                <span v-else>{{ props.product.regularPrice }}</span>
              </p>
            </div>
            <p v-else class="pt-1 mt-4 text-2xl text-gray-900">
              {{ props.product.price }}
            </p>
            <br />
            <p class="pt-1 mt-4 text-2xl text-gray-900">
              {{ stripHTML(props.product.description) }}
            </p>
            <p
              v-if="props.product.variations"
              class="pt-1 mt-4 text-xl text-gray-900"
            >
              <span class="py-2">Varianter</span>
              <select
                id="variant"
                name="variant"
                class="block w-64 px-6 py-2 bg-white border border-gray-500 rounded-lg focus:outline-none focus:shadow-outline"
              >
                <option
                  v-for="(variation, index) in props.product.variations.nodes"
                  :key="variation.databaseId"
                  :value="variation.databaseId"
                  :selected="index === 0"
                >
                  {{ variation.name }}
                </option>
              </select>
            </p>
            <div class="pt-1 mt-2">
              <CartAddToCartButton :product="props.product" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { stripHTML, filteredVariantPrice } from '@/utils/functions'

const props = defineProps({
  product: {
    type: [Object],
    required: true,
  },
})
</script>

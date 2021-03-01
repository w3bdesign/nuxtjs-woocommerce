<template>
  <div v-if="products">
    <section>
      <div id="product-container" class="flex flex-wrap items-center">
        <template v-for="product in products">
          <div
            v-if="product.slug !== undefined"
            :key="product.id"
            class="flex flex-col mt-6 sm:w1/2 md:w-1/3 lg:1/4 xl:w-1/4"
          >
            <NuxtLink
              class="text-black cursor-pointer hover:underline"
              :to="{
                path: '/product/' + product.slug,
                query: { id: product.databaseId },
              }"
            >
              <img
                id="product-image"
                class="container mx-auto transition duration-500 ease-in-out transform cursor-pointer lg:w-64 xl:w-64 sm:p-4 hover:scale-110"
                :alt="product.name"
                :src="productImage(product)"
              />
              <div class="flex justify-center pt-3">
                <p class="text-2xl font-bold text-center cursor-pointer">
                  {{ product.name }}
                </p>
              </div>
            </NuxtLink>
            <div v-if="product.onSale" class="flex justify-center mt-2">
              <div class="text-lg text-gray-900 line-through">
                {{ product.regularPrice }}
              </div>
              <div class="ml-4 text-xl text-gray-900">
                {{ filteredVariantPrice(product.salePrice) }}
              </div>
            </div>
            <div v-else>
              <p class="mt-2 text-xl text-center text-gray-900">
                {{ product.price }}
              </p>
            </div>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import { filteredVariantPrice } from '@/utils/functions'

export default {
  name: 'ShowAllProducts',
  props: {
    products: { type: Array, required: true },
  },

  methods: {
    productImage(product) {
      return product.image
        ? product.image.sourceUrl
        : process.env.placeholderSmallImage
    },
    filteredVariantPrice,
  },
}
</script>

<style scoped>
a:hover {
  border: none;
}
</style>

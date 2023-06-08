<template>
  <div v-if="allCategoryProducts?.productCategory?.products?.nodes">
    <section>
      <div id="product-container" class="flex flex-wrap items-center">
        <template
          v-for="product in allCategoryProducts.productCategory.products.nodes"
        >
          <div
            v-if="product.slug"
            :key="product.id"
            class="flex flex-col mt-6 sm:w1/2 md:w-1/3 lg:w-1/4 lg:mr-4"
          >
            <NuxtLink
              class="text-black cursor-pointer hover:underline"
              :to="{
                path: '/product/' + product.slug,
                query: { id: product.databaseId },
              }"
            >
              <ProductImage :alt="product.name" :src="productImage(product)" />

              <div class="flex justify-center pt-3">
                <p class="text-2xl font-bold text-center cursor-pointer">
                  {{ product.name }}
                </p>
              </div>
            </NuxtLink>
            <div v-if="product.onSale" class="flex justify-center mt-2">
              <div class="text-lg text-gray-900 line-through">
                <span v-if="product.variations">
                  {{ filteredVariantPrice(product.price, "right") }}</span
                >
                <span v-else>{{ product.regularPrice }}</span>
              </div>
              <div class="ml-4 text-xl text-gray-900">
                <span v-if="product.variations">
                  {{ filteredVariantPrice(product.price) }}</span
                >
                <span v-else>{{ product.salePrice }}</span>
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
  <div v-else>
    <section>
      <div id="product-container" class="flex flex-wrap items-center">
        <template v-for="product in allProducts.products.nodes">
          <div
            v-if="product.slug"
            :key="product.id"
            class="flex flex-col mt-6 sm:w1/2 md:w-1/3 lg:w-1/4 lg:mr-4"
          >
            <NuxtLink
              class="text-black cursor-pointer hover:underline"
              :to="{
                path: '/product/' + product.slug,
                query: { id: product.databaseId },
              }"
            >
              <ProductImage :alt="product.name" :src="productImage(product)" />

              <div class="flex justify-center pt-3">
                <p class="text-2xl font-bold text-center cursor-pointer">
                  {{ product.name }}
                </p>
              </div>
            </NuxtLink>
            <div v-if="product.onSale" class="flex justify-center mt-2">
              <div class="text-lg text-gray-900 line-through">
                <span v-if="product.variations">
                  {{ filteredVariantPrice(product.price, "right") }}</span
                >
                <span v-else>{{ product.regularPrice }}</span>
              </div>
              <div class="ml-4 text-xl text-gray-900">
                <span v-if="product.variations">
                  {{ filteredVariantPrice(product.price) }}</span
                >
                <span v-else>{{ product.salePrice }}</span>
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

<script setup>
import FETCH_ALL_PRODUCTS_QUERY from "@/apollo/queries/FETCH_ALL_PRODUCTS_QUERY.gql";
import GET_PRODUCTS_FROM_CATEGORY_QUERY from "@/apollo/queries/GET_PRODUCTS_FROM_CATEGORY_QUERY.gql";

import ProductImage from "@/components/Products/ProductImage.vue";

import { filteredVariantPrice } from "@/utils/functions";

const props = defineProps({
  categoryId: { type: String, required: false },
  categorySlug: { type: String, required: false },
});

const config = useRuntimeConfig();

const productImage = (product) =>
  product.image ? product.image.sourceUrl : config.placeholderImage;

const productVariables = { limit: 99 };
const { data: allProducts } = await useAsyncQuery(
  FETCH_ALL_PRODUCTS_QUERY,
  productVariables
);

const categoryVariables = { id: props.categoryId };
const { data: allCategoryProducts } = await useAsyncQuery(
  GET_PRODUCTS_FROM_CATEGORY_QUERY,
  categoryVariables
);
</script>

<style scoped>
a:hover {
  border: none;
}
</style>

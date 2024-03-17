<template>
  <template v-if="data?.product">
    <section>
      <div class="container flex flex-wrap items-center pt-4 pb-12 mx-auto">
        <div
          class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2"
        >
          <ProductImage
            :alt="data.product.name"
            :src="data.product.image.sourceUrl"
          />
          <div class="ml-8">
            <p class="text-3xl font-bold text-left">
              {{ data.product.name }}
            </p>
            <ProductPrice
              :product="data.product"
              :shouldCenterPrice="false"
              priceFontSize="big"
            />
            <p class="pt-1 mt-6 text-2xl text-gray-900">
              {{ stripHTML(data.product.description) }}
            </p>
            <p
              v-if="data.product.stockQuantity"
              class="pt-1 mt-4 text-2xl text-gray-900"
            >
              {{ data.product.stockQuantity }} in stock
            </p>
            <p
              v-if="data.product.variations"
              class="pt-1 mt-4 text-xl text-gray-900"
            >
              <span class="py-2">Varianter</span>
              <select
                id="variant"
                name="variant"
                class="block w-64 px-6 py-2 bg-white border border-gray-500 rounded-lg focus:outline-none focus:shadow-outline"
                v-model="selectedVariation"
              >
                <option
                  v-for="(variation, index) in data.product.variations.nodes"
                  :key="variation.databaseId"
                  :value="variation.databaseId"
                  :selected="index === 0"
                >
                  {{ filteredVariantName(data.product.name, variation.name) }}
                  ({{ variation.stockQuantity }} in stock)
                </option>
              </select>
            </p>
            <div class="pt-1 mt-2">
              <CommonButton
                @common-button-click="addProductToCart(data.product)"
                :is-loading="isLoading"
              >
                ADD TO CART</CommonButton
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
</template>

<script setup>
/**
 * Vue.js component that displays a single product.
 *
 * @component
 * @example
 * <single-product id="1" slug="example-product"></single-product>
 * @prop {string} id - The ID of the product to display.
 * @prop {string} slug - The slug of the product to display.
 */

import { ref, watch } from "vue";

import GET_SINGLE_PRODUCT_QUERY from "@/apollo/queries/GET_SINGLE_PRODUCT_QUERY.gql";
import ADD_TO_CART_MUTATION from "@/apollo/mutations/ADD_TO_CART_MUTATION.gql";

import ProductImage from "@/components/Products/ProductImage.vue";
import ProductPrice from "@/components/Products/ProductPrice.vue";

import { stripHTML, filteredVariantName } from "@/utils/functions";

import { useCart } from "@/store/useCart";

const cart = useCart();

const isLoading = computed(() => cart.loading);

const selectedVariation = ref(); // TODO Pass this value to addProductToCart()

const props = defineProps({
  id: { type: String, required: true },
  slug: { type: String, required: true },
});

const variables = { id: props.id, slug: props.slug };
const { data } = await useAsyncQuery(GET_SINGLE_PRODUCT_QUERY, variables);

watch(
  () => data.value,
  (dataValue) => {
    if (dataValue && dataValue.product?.variations?.nodes?.length > 0) {
      selectedVariation.value =
        dataValue.product?.variations?.nodes[0].databaseId;
    }
  },
  { immediate: true }
);

/**
 * Adds a product to the cart by calling the addToCart mutation with the given product.
 *
 * @param {object} product - The product to add to the cart.
 * @return {Promise<void>} A Promise that resolves when the product has been successfully added to the cart.
 */
const addProductToCart = async (product) => {
  cart.addToCart(product);

  watchEffect(() => {
    if (isLoading.value === false) {
      window.location.reload();
    }
  });
};
</script>

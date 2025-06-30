<template>
  <div class="product-single-container">
    <template v-if="product">
      <section>
        <div class="container flex flex-wrap items-center pt-4 pb-12 mx-auto">
          <div
            class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2"
          >
            <ProductsImage :alt="product.name" :src="product.image.sourceUrl" />
            <div class="ml-8">
              <p class="text-3xl font-bold text-left">
                {{ product.name }}
              </p>
              <ProductsPrice
                :product="product"
                :shouldCenterPrice="false"
                priceFontSize="big"
              />
              <p class="pt-1 mt-6 text-2xl text-gray-900">
                {{ stripHTML(product.description) }}
              </p>
              <p
                v-if="product.stockQuantity"
                class="pt-1 mt-4 text-2xl text-gray-900"
              >
                {{ product.stockQuantity }} in stock
              </p>
              <p
                v-if="product.variations"
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
                    v-for="(variation, index) in product.variations.nodes"
                    :key="variation.databaseId"
                    :value="variation.databaseId"
                    :selected="index === 0"
                  >
                    {{ filteredVariantName(product.name, variation.name) }}
                    ({{ variation.stockQuantity }} in stock)
                  </option>
                </select>
              </p>
              <div class="pt-1 mt-2">
                <CommonButton
                  @common-button-click="addProductToCart(product)"
                  :is-loading="isLoading"
                >
                  ADD TO CART
                </CommonButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CommonToast ref="toast" />
    </template>
  </div>
</template>

<script setup>
/**
 * Component that displays a single product.
 *
 * @component
 * @example
 * <single-product id="1" slug="example-product"></single-product>
 * @prop {string} id - The ID of the product to display.
 * @prop {string} slug - The slug of the product to display.
 */

import { ref, watch, computed } from "vue";

import { stripHTML, filteredVariantName } from "@/utils/functions";

import { useCart } from "@/store/useCart";

const cart = useCart();

const isLoading = computed(() => cart.loading);

const toast = ref(null);

const props = defineProps({
  product: { type: Object, required: true },
});

const selectedVariation = ref();

watch(
  () => props.product,
  (productValue) => {
    if (productValue && productValue.variations?.nodes?.length > 0) {
      selectedVariation.value = productValue.variations?.nodes[0].databaseId;
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
  try {
    await cart.addToCart(product);
    toast.value.show();
  } catch (error) {
    console.error("Error adding product to cart");
  }
};
</script>

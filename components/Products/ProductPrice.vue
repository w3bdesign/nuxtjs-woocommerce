<template>
  <div>
    <div
      v-if="onSale"
      class="flex"
      :class="shouldCenterPrice ? 'justify-center' : ''"
    >
      <p class="pt-1 mt-4 text-gray-900" :class="getFontSizeClass">
        <span v-if="hasVariations"> {{ formatPrice(variantPrice) }}</span>
        <span v-else>{{ formatPrice(salePrice) }}</span>
      </p>
      <p
        v-if="hasVariations"
        class="pt-1 pl-4 mt-4 text-gray-900 line-through"
        :class="getSaleFontSizeClass"
      >
        >
        {{ formatPrice(variantPrice) }}
      </p>
      <p
        v-else
        class="pt-1 pl-4 mt-4 text-gray-900 line-through"
        :class="getSaleFontSizeClass"
      >
        {{ formatPrice(regularPrice) }}
      </p>
    </div>
    <p
      v-else
      class="flex justify-center pt-1 mt-4 text-gray-900"
      :class="getFontSizeClass"
    >
      {{ formatPrice(nonSalePrice) }}
    </p>
  </div>
</template>

<script setup>
/**
 * Vue.js component that renders a product's price.
 *
 * @typedef {Object} PriceComponentProps
 * @property {string} [variantPrice] - The price of a product's variant.
 * @property {boolean} onSale - Whether or not the product is on sale.
 * @property {boolean} hasVariations - Whether or not the product has variations.
 * @property {string} [salePrice] - The sale price of a product.
 * @property {string} regularPrice - The regular price of a product.
 * @property {string} nonSalePrice - The price of a product that is not on sale.
 * @property {string} [priceFontSize] - The font size of the price.
 * @property {boolean} [shouldCenterPrice] - Whether or not the price should be centered.
 *
 * @typedef {Object} PriceComponentComputedProperties
 * @property {string} getFontSizeClass - The font size CSS class for the regular price.
 * @property {string} getSaleFontSizeClass - The font size CSS class for the sale price.
 *
 * @typedef {Object} PriceComponentExports
 * @property {PriceComponentProps} props - The component's props.
 * @property {PriceComponentComputedProperties} computed - The component's computed properties.
 *
 * @type {PriceComponentExports}
 */

import { formatPrice } from "@/utils/functions";

const props = defineProps({
  variantPrice: { type: String, required: false },
  onSale: { type: Boolean, required: true },
  hasVariations: { type: Boolean, required: true },
  salePrice: { type: String, required: false },
  regularPrice: { type: String, required: true },
  nonSalePrice: { type: String, required: true },
  priceFontSize: { type: String, required: false },
  shouldCenterPrice: { type: Boolean, required: false },
});

const getFontSizeClass = computed(() => {
  switch (props.priceFontSize) {
    case "small":
      return "text-lg";
    case "normal":
      return "text-2xl";
    case "big":
      return "text-2xl";
    default:
      return "text-xl";
  }
});

const getSaleFontSizeClass = computed(() => {
  switch (props.priceFontSize) {
    case "small":
      return "text-lg";
    case "normal":
      return "text-xl";
    case "big":
      return "text-xl";
    default:
      return "text-xl";
  }
});
</script>

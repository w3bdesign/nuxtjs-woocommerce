<template>
  <div>
    <div
      v-if="onSale"
      class="flex"
      :class="shouldCenterPrice ? 'justify-center' : ''"
    >
      <p class="pt-1 mt-4 text-gray-900" :class="getFontSizeClass">
        {{ formatPrice(displayPrice) }}
      </p>
      <p
        class="pt-1 pl-4 mt-4 text-gray-900 line-through"
        :class="getSaleFontSizeClass"
      >
        {{ formatPrice(basePrice) }}
      </p>
    </div>
    <p
      v-else
      class="flex pt-1 mt-4 text-2xl text-gray-900"
      :class="shouldCenterPrice ? 'justify-center' : ''"
    >
      {{ formatPrice(displayPrice) }}
    </p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import {
  formatPrice,
  filteredVariantPrice,
  hasVariations,
} from "@/utils/functions";

const props = defineProps({
  product: Object,
  priceFontSize: String,
  shouldCenterPrice: Boolean,
});

const onSale = computed(() => props.product.onSale);

const productHasVariations = computed(() => hasVariations(props.product));

const basePrice = computed(() => {
  if (productHasVariations.value) {
    return filteredVariantPrice(props.product.price);
  } else {
    return props.product.regularPrice;
  }
});

const displayPrice = computed(() => {
  if (onSale.value) {
    return productHasVariations.value
      ? filteredVariantPrice(props.product.price)
      : props.product.salePrice;
  } else {
    return props.product.price;
  }
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

<template>
  <div id="product-container" class="flex flex-wrap items-center">
    <template v-for="product in filteredProducts" :key="product.id">
      <div class="flex flex-col mt-6 sm:w-1/2 md:w-1/3 lg:w-1/4 lg:mr-4">
        <NuxtLink
          class="text-black cursor-pointer hover:underline"
          :to="productLink(product)"
        >
          <ProductImage :alt="product.name" :src="productImage(product)" />
          <div class="flex justify-center pt-3">
            <p class="text-2xl font-bold text-center cursor-pointer">
              {{ product.name }}
            </p>
          </div>
        </NuxtLink>
        <ProductPrice
          :product="product"
          priceFontSize="normal"
          :shouldCenterPrice="true"
        />
      </div>
    </template>
  </div>
</template>

<script setup>
import ProductImage from "@/components/Products/ProductImage.vue";
import ProductPrice from "@/components/Products/ProductPrice.vue";

const props = defineProps({
  sortBy: { type: String, required: false, default: "popular" },
  selectedSizes: { type: Array, required: false, default: () => [] },
  selectedColors: { type: Array, required: false, default: () => [] },
  priceRange: { type: Array, required: false, default: () => [0, 1000] },
  productTypes: { type: Array, required: false, default: () => [] },
});

const config = useRuntimeConfig();

import FETCH_ALL_PRODUCTS_QUERY from "@/apollo/queries/FETCH_ALL_PRODUCTS_QUERY.gql";
import GET_PRODUCTS_FROM_CATEGORY_QUERY from "@/apollo/queries/GET_PRODUCTS_FROM_CATEGORY_QUERY.gql";

const productVariables = { limit: 99 };
const { data: allProducts } = await useAsyncQuery(
  FETCH_ALL_PRODUCTS_QUERY,
  productVariables,
);

const products = computed(() => allProducts.value?.products?.nodes || []);

// --- Filtering/Sorting ---
const filteredProducts = computed(() => {
  let filtered = products.value.filter((product) => {
    // Price
    const productPrice = parseFloat((product.price || "0").replace(/[^0-9.]/g, ""));
    if (productPrice < props.priceRange[0] || productPrice > props.priceRange[1]) return false;

    // Product Type
    const selectedTypes = props.productTypes.filter((t) => t.checked).map((t) => t.name.toLowerCase());
    if (selectedTypes.length > 0) {
      const productCategories = (product.productCategories?.nodes || []).map((cat) => cat.name.toLowerCase());
      if (!selectedTypes.some((type) => productCategories.includes(type))) return false;
    }

    // Size
    if (props.selectedSizes.length > 0) {
      const productSizes = product.allPaSizes?.nodes?.map((node) => node.name) || [];
      if (!props.selectedSizes.some((size) => productSizes.includes(size))) return false;
    }

    // Color
    if (props.selectedColors.length > 0) {
      const productColors = product.allPaColors?.nodes?.map((node) => node.name) || [];
      if (!props.selectedColors.some((color) => productColors.includes(color))) return false;
    }

    return true;
  });

  // Sorting
  filtered = [...filtered].sort((a, b) => {
    const priceA = parseFloat((a.price || "0").replace(/[^0-9.]/g, ""));
    const priceB = parseFloat((b.price || "0").replace(/[^0-9.]/g, ""));
    switch (props.sortBy) {
      case "price-low":
        return priceA - priceB;
      case "price-high":
        return priceB - priceA;
      case "newest":
        return (b.databaseId || 0) - (a.databaseId || 0);
      default:
        return 0;
    }
  });

  return filtered;
});

/**
 * Returns the path and query parameters for a product link.
 */
const productLink = (product) => {
  return {
    path: "/product/" + product.slug,
    query: { id: product.databaseId },
  };
};

/**
 * Returns the source URL of a product image or a placeholder image if the product does not have an image.
 */
const productImage = (product) =>
  product.image ? product.image.sourceUrl : config.public.placeholderImage;
</script>

<style scoped>
a:hover {
  border: none;
}
</style>

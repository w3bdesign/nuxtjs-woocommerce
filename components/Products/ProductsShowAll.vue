<template>
  <div id="product-container" class="flex flex-wrap items-center">
    <template v-for="product in products" :key="product.id">
      <div class="flex flex-col mt-6 sm:w-1/2 md:w-1/3 lg:w-1/4 lg:mr-4">
        <NuxtLink
          class="text-black cursor-pointer hover:underline"
          :to="productLink(product)"
        >
          <ProductsImage :alt="product.name" :src="productImage(product)" />
          <div class="flex justify-center pt-3">
            <p class="text-2xl font-bold text-center cursor-pointer">
              {{ product.name }}
            </p>
          </div>
        </NuxtLink>
        <ProductsPrice
          :product="product"
          priceFontSize="normal"
          :shouldCenterPrice="true"
        />
      </div>
    </template>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});

/**
 * Returns the path and query parameters for a product link.
 *
 * @param {Object} product - Object containing product information.
 * @param {string} product.slug - The product's URL slug.
 * @param {number} product.databaseId - The product's database ID.
 * @return {Object} An object containing the product's path and query parameters.
 */
const productLink = (product) => {
  return {
    path: "/product/" + product.slug,
    query: { id: product.databaseId },
  };
};

/**
 * Returns the source URL of a product image or a placeholder image if the product does not have an image.
 *
 * @param {Object} product - The product object containing the image source URL.
 * @return {string} The source URL of the product image or a placeholder image if the product does not have an image.
 */
const productImage = (product) =>
  product.image ? product.image.sourceUrl : config.public.placeholderImage;
</script>

<style scoped>
a:hover {
  border: none;
}
</style>

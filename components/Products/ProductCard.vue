<template>
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

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const config = useRuntimeConfig();

const productLink = (product) => {
  return {
    path: "/product/" + product.slug,
    query: { id: product.databaseId },
  };
};

const productImage = (product) =>
  product.image ? product.image.sourceUrl : config.public.placeholderImage;
</script>

<style scoped>
a:hover {
  border: none;
}
</style>

<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap">
      <ProductFilter />
      <div class="w-full md:w-3/4 p-4">
        <template v-if="pending">
          <SpinnerLoading />
        </template>
        <template v-else-if="error">
          <p>Error loading products.</p>
        </template>
        <template v-else>
          <ProductGrid :products="store.filteredProducts" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from "@/store/useProductsStore";
import FETCH_ALL_PRODUCTS_QUERY from "@/apollo/queries/FETCH_ALL_PRODUCTS_QUERY.gql";

const store = useProductsStore();

const { data, pending, error } = await useAsyncQuery(FETCH_ALL_PRODUCTS_QUERY);

if (data.value) {
  store.products = data.value.products.nodes;
  store.productTypes = store.getUniqueProductTypes;
}

useHead({
  title: "Products",
  titleTemplate: "%s - Nuxt 3 Woocommerce",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: "Nuxt 3 Woocommerce",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>

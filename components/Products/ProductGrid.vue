<template>
  <div class="w-full md:w-3/4 p-4">
    <div class="flex justify-end mb-4">
      <ProductSort />
    </div>
    <div id="product-container" class="flex flex-wrap items-center">
      <template v-if="store.loading">
        <SpinnerLoading />
      </template>
      <template v-else-if="store.error">
        <p>Error loading products.</p>
      </template>
      <template v-else>
        <ProductCard
          v-for="product in store.filteredProducts"
          :key="product.id"
          :product="product"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from "@/store/useProductsStore";

const store = useProductsStore();

onMounted(() => {
  store.fetchProducts();
});
</script>

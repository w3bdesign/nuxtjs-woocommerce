<template>
  <div class="w-full md:w-3/4 p-4">
    <div class="flex justify-end mb-4">
      <ProductSort />
    </div>
    <div id="product-container" class="flex flex-wrap items-center">
      <template v-if="products.length > 0">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </template>
      <template v-else>
        <p>No products are available.</p>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="w-full md:w-1/4 p-4">
    <h3 class="text-lg font-bold mb-2">Product Type</h3>
    <div v-for="productType in store.productTypes" :key="productType.id">
      <input
        type="checkbox"
        :id="productType.id"
        :checked="productType.checked"
        @change="store.toggleProductType(productType.id)"
      />
      <label :for="productType.id" class="ml-2">{{ productType.name }}</label>
    </div>

    <h3 class="text-lg font-bold mt-4 mb-2">Price</h3>
    <div class="flex items-center" v-if="store.priceRange">
      <input
        type="range"
        min="0"
        max="1000"
        :value="store.priceRange[0]"
        @input="updatePriceRange($event, 0)"
        class="w-full"
      />
      <span class="mx-2">{{ store.priceRange[0] }}</span>
      <span>-</span>
      <input
        type="range"
        min="0"
        max="1000"
        :value="store.priceRange[1]"
        @input="updatePriceRange($event, 1)"
        class="w-full"
      />
      <span class="ml-2">{{ store.priceRange[1] }}</span>
    </div>

    <button
      @click="store.resetFilters()"
      class="mt-4 bg-gray-200 px-4 py-2 rounded"
    >
      Reset Filter
    </button>
  </div>
</template>

<script setup>
import { useProductsStore } from "@/store/useProductsStore";

const store = useProductsStore();

const updatePriceRange = (event, index) => {
  const newRange = [...store.priceRange];
  newRange[index] = parseInt(event.target.value, 10);
  store.setPriceRange(newRange);
};
</script>

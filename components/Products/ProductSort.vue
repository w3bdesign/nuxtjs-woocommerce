<template>
  <div class="flex items-center">
    <label for="sort-by" class="mr-2">Sort by:</label>
    <select
      id="sort-by"
      :value="store.sortBy"
      @change="store.setSortBy($event.target.value)"
      class="p-2 border rounded"
    >
      <option value="popularity">Popularity</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="newest">Newest</option>
    </select>
  </div>
</template>

<script setup>
import { useProductsStore } from "@/store/useProductsStore";

const store = useProductsStore();
</script>

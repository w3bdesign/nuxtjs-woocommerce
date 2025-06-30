<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row gap-8">
      <!-- Sidebar Filters -->
      <ProductFilters />

      <!-- Main Content -->
      <div class="flex-1">
        <div
          class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8"
        >
          <h1 class="text-xl sm:text-2xl font-medium text-center sm:text-left">
            Produkter <span class="text-gray-500">(0)</span>
          </h1>
          <ProductSort />
        </div>
        <ProductsShowAll />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductFilters from '~/components/Products/ProductFilters.vue'
import ProductSort from '~/components/Products/ProductSort.vue'

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

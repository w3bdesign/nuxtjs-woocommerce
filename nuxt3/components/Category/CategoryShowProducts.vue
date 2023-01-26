<template>
  <div class="container mx-auto">
    <div v-if="products">
      <h1 class="h-10 p-6 text-3xl font-bold text-center">
        {{ products.name }}
      </h1>
      <br />
      <ProductsShowAll :products="products.products.nodes" />
      <div v-if="noProducts" class="mt-10">
        <h2 class="h-10 text-2xl font-bold text-center">
          No products to display
        </h2>
      </div>
    </div>
    <div v-else>
      <SpinnerLoading />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  products: {
    type: [Object],
    required: true,
  },
})

const noProducts = computed(() => props.products.products.nodes.length === 0)
</script>

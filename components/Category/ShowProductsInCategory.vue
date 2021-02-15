<template>
  <div class="container mx-auto">
    <div v-if="products">
      <h1 class="h-10 p-6 text-3xl font-bold text-center">
        {{ products.name }}
      </h1>
      <br />
      <ProductsShowAllProducts :products="products.products.nodes" />
      <div v-if="noProducts" class="mt-10">
        <h2 class="h-10 text-2xl font-bold text-center">
          No products to display
        </h2>
      </div>
    </div>
    <div v-else><SpinnerLoadingSpinner /></div>
  </div>
</template>

<script>
export default {
  props: {
    products: { type: Object, required: true },
  },
  computed: {
    noProducts() {
      return this.products.products.nodes.length === 0
    },
  },
}
</script>

<template>
  <div class="container mx-auto">
    <div v-if="products">
      <div>
        <h1 class="h-10 text-3xl font-bold text-center">{{ products.name }}</h1>
        <br />
        <ShowAllProducts :products="products.products.nodes" />
      </div>
    </div>
    <div v-else>Loading ...</div>
  </div>
</template>

<script>
export default {
  props: {
    products: { type: Object, required: true },
  },
}
</script>

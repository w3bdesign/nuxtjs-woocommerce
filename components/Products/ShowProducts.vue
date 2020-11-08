<template>
  <div>
    <h2>Show Products</h2>
    <div v-for="data in products" :key="data.id">
      <div v-for="product in data" :key="product.id">
        <p>{{ product.name }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.databaseId }}</p>
        <p>
          <img :src="product.image && product.image.sourceUrl" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowProducts',
  props: {
    products: { type: Object, required: true },
    // TODO Add more prop types here
  },
}
</script>

<style></style>

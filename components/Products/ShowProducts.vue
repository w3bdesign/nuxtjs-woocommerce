<template>
  <div>
    <h2>Products ...</h2>
    <div v-for="product in products" :key="product.id">
      <div v-for="p in product" :key="p.id">
        <p>{{ p.name }}</p>
        <p>{{ p.price }}</p>
        <p>
          <img :src="p.image && p.image.sourceUrl" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowProducts',
  // eslint-disable-next-line vue/require-prop-types
  props: ['products'],
}
</script>

<style></style>

<template>
  <div class="container mx-auto">
    <div v-if="products">
      <div>
        <pre>{{ products }}</pre>
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

<template>
  <ProductsSingleProduct :id="route.query.id" :slug="route.params.product" />
</template>

<script setup>
const route = useRoute();
</script>

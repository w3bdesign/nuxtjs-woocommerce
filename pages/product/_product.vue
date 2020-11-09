<template>
  <div>
    <ShowSingleProduct />
    Slug: {{ this.$route.params.product }} ID: {{ this.$route.query.id }}
  </div>
</template>

<script>
export default {
  name: 'Product',
  layout: 'Layout',
}
</script>

<style></style>

<template>
  <div>
    <br />
    <div class="h-32 text-2xl text-center">
      Slug: {{ this.$route.params.product }} <br />ID:
      {{ this.$route.query.id }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  layout: 'Layout',
}
</script>

<style></style>

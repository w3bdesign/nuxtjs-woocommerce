<template>
  <div v-if="product">
    <pre>{{ product }} </pre>
  </div>
</template>

<script>
// https://github.com/nuxt/nuxt.js/tree/dev/examples/vue-apollo
export default {
  name: 'ShowSingleProduct',
  props: {
    product: { type: Object, required: true },
  },
}
</script>

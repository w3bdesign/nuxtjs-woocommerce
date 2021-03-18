<template>
  <div>
    <h1>Thank you for your order!</h1>
    <br />
    <h2>Please check your email for an order confirmation</h2>
  </div>
</template>

<script>
export default {
  layout: 'Layout',
  transition: {
    name: 'home',
    mode: 'out-in',
  },
  head: {
    title: 'NuxtJS WooCommerce - Thank you for your order',
  },
}
</script>

<style>
h1 {
  @apply h-10 p-6 text-3xl font-bold text-center;
}

h2 {
  @apply h-10 p-6 text-2xl font-bold text-center;
}
</style>

<template>
  <div>
    <h1>Thank you for your order!</h1>
    <h2>Please check your email for an order confirmation</h2>
  </div>
</template>

<script setup>
useHead({
  title: "Order placed",
  titleTemplate: "%s - Nuxt 3 Woocommerce",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: "Nuxt 3 Woocommerce",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>

<style scoped>
h1 {
  @apply h-10 p-6 text-3xl font-bold text-center;
}

h2 {
  @apply h-10 p-6 text-2xl font-bold text-center mt-4;
}
</style>

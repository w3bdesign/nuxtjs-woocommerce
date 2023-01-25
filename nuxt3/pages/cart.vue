<template>
  <div>
    <CartContents display-remove />
  </div>
</template>

<script setup>
useHead({
  title: 'Cart',
  titleTemplate: '%s - Nuxt 3 Woocommerce',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: 'Nuxt 3 Woocommerce',
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
})
</script>

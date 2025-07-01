<template>
  <div>
    <CartContents />
    <CheckoutForm />
  </div>
</template>

<script setup>
import { useCart } from "@/store/useCart";
const cart = useCart();
if (cart.cart.length === 0) {
  await navigateTo("/");
}
useHead({
  title: "Checkout",
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

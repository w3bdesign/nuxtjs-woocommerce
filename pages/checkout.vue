<template>
  <div>
    <div v-if="cart.cart.length > 0">
      <CartContents />
      <CheckoutForm />
    </div>
    <div v-else>
      <h1 class="text-2xl m-12 mt-24 font-bold text-center">
        Ingen produkter i handlekurven
      </h1>
    </div>
  </div>
</template>

<script setup>
import { useCart } from "@/store/useCart";

const cart = useCart();

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

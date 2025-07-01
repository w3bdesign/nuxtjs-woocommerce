<template>
  <div>
    <CartContents />
    <CheckoutForm />
  </div>
</template>

<script setup>
import { useCart } from "@/store/useCart";
import { watch } from "vue";

const cart = useCart();

watch(
  () => cart.loading,
  (loading) => {
    if (!loading && cart.cart.length === 0) {
      navigateTo("/");
    }
  },
  { immediate: true },
);

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

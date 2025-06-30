<template>
  <!doctype html>
  <Html lang="en">
    <title>Nuxt 3 Woocommerce</title>
    <Body
      class="antialiased duration-300 transition-colors text-gray-800 bg-white"
    >
      <NuxtLayout>
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<script setup>
useSeoMeta({
  title: "Nuxt 3 Woocommerce",
  description:
    "A modern, fast, and SEO-friendly e-commerce site built with Nuxt 3 and WooCommerce.",
  ogTitle: "Nuxt 3 Woocommerce",
  ogDescription:
    "A modern, fast, and SEO-friendly e-commerce site built with Nuxt 3 and WooCommerce.",
  twitterCard: "summary_large_image",
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
});
</script>

<style>
.page-enter-active {
  transition: all 0.1s ease-out;
}
.page-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.page-enter-from,
.page-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.layout-enter-active {
  transition: all 0.1s ease-out;
}
.layout-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.layout-enter-from,
.layout-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>

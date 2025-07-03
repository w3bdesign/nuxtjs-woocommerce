<template>
  <div class="flex justify-center items-center">
    <CategoryShowAll :categories="categories" />
  </div>
</template>

<script setup>
import FETCH_ALL_CATEGORIES_QUERY from "@/apollo/queries/FETCH_ALL_CATEGORIES_QUERY.gql";
const variables = { limit: 99 };
const { data: categories } = await useAsyncQuery(
  FETCH_ALL_CATEGORIES_QUERY,
  variables,
);

useHead({
  title: "Categories",
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

<template>
  <ProductsSingleProduct :product="data.product" v-if="data && data.product" />
</template>

<script setup>
import GET_SINGLE_PRODUCT_QUERY from "@/apollo/queries/GET_SINGLE_PRODUCT_QUERY.gql";

const route = useRoute();

console.log("Route:", route.query);

const variables = { id: route.query.id };
const { data } = await useAsyncQuery(GET_SINGLE_PRODUCT_QUERY, variables);

console.log("Data:", data);

useHead({
  title: route.params.product,
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

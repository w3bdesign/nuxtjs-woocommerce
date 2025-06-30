<template>
  <ProductsSingleProduct :product="productData" v-if="productData" />
</template>

<script setup>
import { useAsyncQuery } from "@vue/apollo-composable";
import GET_SINGLE_PRODUCT_QUERY from "@/apollo/queries/GET_SINGLE_PRODUCT_QUERY.gql";
const route = useRoute();

const variables = { id: route.query.id };
const { result } = await useAsyncQuery(GET_SINGLE_PRODUCT_QUERY, variables);
const productData = result.value?.product;

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

import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr: true,
  components: true,
  css: ["~/assets/css/main.css", "~/assets/css/animate.min.css"],
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/apollo",
    "@formkit/nuxt",
    "@nuxtjs/algolia",
    "nuxt-icon",
    "@nuxt/image",
  ],
  plugins: ["~/plugins/apollo"],
  runtimeConfig: {
    public: {
      graphqlURL: process.env.PUBLIC_GRAPHQL_URL,
      indexName: process.env.PUBLIC_ALGOLIA_INDEX_NAME,
      placeholderImage: process.env.PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL,
      currencyLocale: process.env.PUBLIC_CURRENCY_LOCALE,
      currency: process.env.PUBLIC_CURRENCY,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=500, initial-scale=1",
      meta: [{ name: "description", content: "Nuxt 3 - Woocommerce" }],
    },
    // global transition
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  algolia: {
    apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
    applicationId: process.env.ALGOLIA_APPLICATION_ID,
    instantSearch: { theme: "algolia" },
  },
  apollo: {
    authType: "Session",
    authHeader: "woocommerce-session",
    tokenStorage: "cookie",
    tokenName: "woocommerce-session",
    clients: {
      default: {
        httpEndpoint: process.env.PUBLIC_GRAPHQL_URL,
        httpLinkOptions: {
          credentials: "include",
        },
      },
    },
  },
});

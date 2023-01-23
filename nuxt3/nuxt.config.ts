// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  components: true,
  css: ['~/assets/css/main.css', '~/assets/css/animate.min.css'],
  modules: ['@pinia/nuxt', '@nuxtjs/apollo'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      // title: 'Nuxt 3 - Woocommerce',
      meta: [{ name: 'description', content: 'Nuxt 3 - Woocommerce' }],
    },
  },
  apollo: {
    clients: {
      default: { httpEndpoint: 'https://woocommerce.dfweb.no/graphql' },
    },
  },
})

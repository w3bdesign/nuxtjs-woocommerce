// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  components: true,
  css: ['~/assets/css/main.css', '~/assets/css/animate.min.css'],
  modules: ['@pinia/nuxt', '@nuxtjs/apollo'],
  plugins: ['~/plugins/apollo'],
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
    // authType: 'Bearer',
    // authHeader: 'Authorization',
    tokenStorage: 'cookie',
    clients: {
      default: {
        httpEndpoint: process.env.PUBLIC_GRAPHQL_URL,
        httpLinkOptions: {
          credentials: 'include',
          headers: {
            'woocommerce-session':
              'Session eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd29vY29tbWVyY2UuZGZ3ZWIubm8iLCJpYXQiOjE2NzQ1MzMyODYsIm5iZiI6MTY3NDUzMzI4NiwiZXhwIjoxNjc0NzA2MDg2LCJkYXRhIjp7ImN1c3RvbWVyX2lkIjoidF8wMmU5YTUxNTY2NDhiYjQzYjc1N2ZkMzViN2ZjYjkifX0.MI71c0A2Xz4eg3gYuJZVT2xPL-2_SCV1LWIDoTZnJdg',
          },
        },
      },
      tokenName: 'woocommerce-session',
    },
  },
})

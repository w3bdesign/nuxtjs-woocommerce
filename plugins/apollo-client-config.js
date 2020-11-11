import {
  IntrospectionFragmentMatcher,
  InMemoryCache,
} from 'apollo-cache-inmemory'

import introspectionQueryResultData from '@/graphql.schema.json'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
})

export default function (_context) {
  // https://github.com/nuxt-community/apollo-module/issues/176

  return {
    httpEndpoint: process.env.graphqlUrl,
    httpLinkOptions: {
      headers: {
        'woocommerce-session':
          'Session eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd29vLmRmd2ViLm5vIiwiaWF0IjoxNjA1MDcwNDc2LCJuYmYiOjE2MDUwNzA0NzYsImV4cCI6MTYwNTI0MzI3NiwiZGF0YSI6eyJjdXN0b21lcl9pZCI6ImMzNTYwYzU1MmZlOWU0NzRkODE3MTFjNmY4OTVhYjAwIn19.6NeoHz0XF2-TDvABV0hMgx1MJwMFalw2KdTRvkKWWnc',
      },
    },
    cache: new InMemoryCache({ fragmentMatcher }),
  }
}

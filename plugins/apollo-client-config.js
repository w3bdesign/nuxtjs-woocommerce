import {
  IntrospectionFragmentMatcher,
  InMemoryCache,
} from 'apollo-cache-inmemory'

import introspectionQueryResultData from '@/graphql.schema.json'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
})

// https://github.com/vuejs/vue-apollo/issues/713
// https://github.com/w3bdesign/nextjs-woocommerce/blob/master/utils/apollo/ApolloClient.js
// https://github.com/vuejs/vue-apollo/issues/1019
// https://github.com/vuejs/vue-apollo/issues/713
// https://github.com/vuejs/vue-apollo/issues/865

// https://stackoverflow.com/questions/48558681/add-custom-header-to-apollo-client-polling-request

export default function (_context) {
  // Sample session that we will send
  const session =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd29vLmRmd2ViLm5vIiwiaWF0IjoxNjA2MTg1MDY5LCJuYmYiOjE2MDYxODUwNjksImV4cCI6MTYwNjM1Nzg2OSwiZGF0YSI6eyJjdXN0b21lcl9pZCI6IjBmZTRkZWYwMjUyNGUxYjc3YWE3MjRiMTc4YTA0ZjZlIn19.sGswTRLMP2ID-ZCecGgrB8Z8T0qbguBMj1wmqraYxxo'

  return {
    httpEndpoint: process.env.graphqlUrl,
    fetchOptions: {
      mode: 'cors',
      // mode: 'no-cors',
    },
    httpLinkOptions: {
      credentials: 'same-origin',
      // credentials: 'include',
      headers: { 'woocommerce-session': `Session ${session}` },
    },
    cache: new InMemoryCache({ fragmentMatcher }),
  }
}

import {
  IntrospectionFragmentMatcher,
  InMemoryCache,
} from 'apollo-cache-inmemory'

import introspectionQueryResultData from '@/graphql.schema.json'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
})

export default function (_context) {
  return {
    httpEndpoint: process.env.graphqlUrl,
    fetchOptions: {
      // mode: 'cors',
      mode: 'no-cors',
    },
    httpLinkOptions: {
      credentials: 'same-origin',
      // credentials: 'include',
      // headers: {  'woocommerce-session': `Session ${session}`,}
    },
    cache: new InMemoryCache({ fragmentMatcher }),
  }
}

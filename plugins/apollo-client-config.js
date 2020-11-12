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
      mode: 'cors',
    },
    httpLinkOptions: {
      credentials: 'include',
    },
    cache: new InMemoryCache({ fragmentMatcher }),
  }
}

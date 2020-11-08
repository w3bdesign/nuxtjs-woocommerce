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
    httpEndpoint: 'https://woo.dfweb.no/graphql',
    cache: new InMemoryCache({ fragmentMatcher }),
  }
}

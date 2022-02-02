import {
  IntrospectionFragmentMatcher,
  InMemoryCache,
} from 'apollo-cache-inmemory'

import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'

import introspectionQueryResultData from '@/graphql.schema.json'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
})

const httpLink = new HttpLink({
  uri: process.env.graphqlUrl,
})

export const middleware = new ApolloLink((operation, forward) => {
  /**
   * If session data exist in local storage, set value as session header.
   */

  if (process.browser) {
    const session = localStorage.getItem('woo-session') || 'test'

    if (session && session.length > 0) {
      operation.setContext(() => ({
        headers: {
          'woocommerce-session': `Session ${session}`,
        },
      }))
    }
  }
  return forward(operation)
})

export const afterware = new ApolloLink((operation, forward) => forward(operation).map((response) => {
  /**
   * Check for session header and update session in local storage accordingly.
   */
  const context = operation.getContext()
  const {
    response: { headers },
  } = context

  const session =
    headers.get('woocommerce-session') || localStorage.getItem('woo-session')

  if (process.browser && session) {
    localStorage.setItem('woo-session', session)
  }
  return response
}))

export default function () {
  return {
    /**
     * default 'apollo' definition
     */
    defaultOptions: {
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network',
      },
    },
    defaultHttpLink: false,
    link: middleware.concat(afterware.concat(httpLink)),
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

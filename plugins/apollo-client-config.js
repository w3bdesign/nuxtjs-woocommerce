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
  // uri: process.env.graphqlUrl,
  uri: 'https://woo.dfweb.no/graphql',
})

// https://github.com/vuejs/vue-apollo/issues/713
// https://github.com/w3bdesign/nextjs-woocommerce/blob/master/utils/apollo/ApolloClient.js
// https://github.com/vuejs/vue-apollo/issues/1019
// https://github.com/vuejs/vue-apollo/issues/713
// https://github.com/vuejs/vue-apollo/issues/865

// https://stackoverflow.com/questions/48558681/add-custom-header-to-apollo-client-polling-request

export const middleware = new ApolloLink((operation, forward) => {
  /**
   * If session data exist in local storage, set value as session header.
   */

  if (process.browser) {
    const session = localStorage.getItem('woo-session')
    if (session.length > 0) {
      operation.setContext(({ headers = {} }) => ({
        headers: {
          'woocommerce-session': `Session ${session}`,
        },
      }))
    }
  }
  return forward(operation)
})

export const afterware = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    /**
     * Check for session header and update session in local storage accordingly.
     */
    const context = operation.getContext()
    const {
      response: { headers },
    } = context
    const session =
      headers.get('woocommerce-session') || localStorage.getItem('woo-session')

    if (process.browser && localStorage.getItem('woo-session') !== session) {
      localStorage.setItem('woo-session', session)
    }
    return response
  })
})

export default function (_context) {
  return {
    /**
     * default 'apollo' definition
     */
    defaultOptions: {
      // See 'apollo' definition
      // For example: default query options
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network',
        // fetchPolicy: 'network-only',
      },
    },
    defaultHttpLink: false,
    link: middleware.concat(afterware.concat(httpLink)),
    httpEndpoint: process.env.graphqlUrl,
    fetchOptions: {
      mode: 'cors',
      // mode: 'no-cors',
    },
    httpLinkOptions: {
      // credentials: 'same-origin',
      credentials: 'include',
      // headers: { 'woocommerce-session': `Session ${session}` },
    },
    cache: new InMemoryCache({ fragmentMatcher }),
  }
}

import {
  createHttpLink,
  ApolloLink,
  InMemoryCache,
  ApolloClient,
} from '@apollo/client/core'

import { provideApolloClient } from '@vue/apollo-composable'

export default defineNuxtPlugin((nuxtApp) => {
  const cookie = useCookie('woo-session', { maxAge: 86400, sameSite: 'none', secure: true })
  const config = useRuntimeConfig()

  const httpLink = createHttpLink({
    uri: config.graphqlURL,
  })

  const middleware = new ApolloLink((operation, forward) => {
    /**
     * If session data exist in local storage, set value as session header.
     */

    if (process.client) {
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

  const afterware = new ApolloLink((operation, forward) =>
    forward(operation).map((response) => {
      /**
       * Check for session header and update session in local storage accordingly.
       */
      const context = operation.getContext()

      const {
        response: { headers },
      } = context

      const session =
        headers.get('woocommerce-session') ||
        localStorage.getItem('woo-session')

      if (process.client && session) {
        cookie.value = session
        localStorage.setItem('woo-session', session)
      }
      return response
    })
  )

  // Cache implementation
  const cache = new InMemoryCache()

  // Create the apollo client
  const apolloClient = new ApolloClient({
    link: middleware.concat(afterware.concat(httpLink)),
    //link: afterware.concat(httpLink),
    cache,
  })

  nuxtApp.hook('apollo:auth', ({ token }) => {
    token.value = cookie.value

    provideApolloClient(apolloClient)
  })
})

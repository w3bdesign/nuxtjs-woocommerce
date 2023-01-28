import {
  createHttpLink,
  ApolloLink,
  InMemoryCache,
  ApolloClient,
} from "@apollo/client/core";

import { provideApolloClient } from "@vue/apollo-composable";

export default defineNuxtPlugin((nuxtApp) => {
  const cookie = useCookie("woo-session", {
    maxAge: 86_400,
    sameSite: "none",
    secure: true,
  });
  const config = useRuntimeConfig();

  const httpLink = createHttpLink({
    uri: config.graphqlURL,
  });

  const middleware = new ApolloLink((operation, forward) => {
    /**
     * If session data exist in local storage, set value as session header.
     */

    if (process.client && cookie.value) {
      operation.setContext(() => ({
        headers: {
          "woocommerce-session": `Session ${cookie.value}`,
        },
      }));
    }

    return forward(operation);
  });

  const afterware = new ApolloLink((operation, forward) =>
    forward(operation).map((response) => {
      /**
       * Check for session header and update session in local storage accordingly.
       */
      const context = operation.getContext();

      const {
        response: { headers },
      } = context;

      const session = headers.get("woocommerce-session") || cookie.value;

      if (process.client && session) {
        cookie.value = session;
      }
      return response;
    })
  );

  // Cache implementation
  const cache = new InMemoryCache();

  // Create the apollo client
  const apolloClient = new ApolloClient({
    link: middleware.concat(afterware.concat(httpLink)),
    cache,
  });

  provideApolloClient(apolloClient);

  nuxtApp.hook("apollo:auth", ({ token }) => {
    token.value = cookie.value;
  });
});

import {
  createHttpLink,
  ApolloLink,
  InMemoryCache,
  ApolloClient,
} from "@apollo/client/core";

import { provideApolloClient } from "@vue/apollo-composable";

const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const httpLink = createHttpLink({
    uri: config.public.graphqlURL,
  });

  const middleware = new ApolloLink((operation, forward) => {
    /**
     * If session data exist in local storage, set value as session header.
     */
    const sessionData = process.client
      ? JSON.parse(localStorage.getItem("woo-session"))
      : null;

    if (sessionData && sessionData.token && sessionData.createdTime) {
      const { token, createdTime } = sessionData;

      // Check if the token is older than 7 days
      if (Date.now() - createdTime > SEVEN_DAYS) {
        // If it is, delete it
        localStorage.removeItem("woo-session");
      } else {
        // If it's not, use the token
        operation.setContext(() => ({
          headers: {
            "woocommerce-session": `Session ${token}`,
          },
        }));
      }
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

      const session = headers.get("woocommerce-session");

      if (session && process.client) {
        if (session === "false") {
          // Remove session data if session destroyed.
          localStorage.removeItem("woo-session");
          // Update session new data if changed.
        } else if (!localStorage.getItem("woo-session")) {
          localStorage.setItem(
            "woo-session",
            JSON.stringify({ token: session, createdTime: Date.now() })
          );
        }
      }
      return response;
    }),
  );

  // Cache implementation
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          cart: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  });

  // Create the apollo client
  const apolloClient = new ApolloClient({
    link: middleware.concat(afterware.concat(httpLink)),
    cache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
      },
    },
  });

  provideApolloClient(apolloClient);

  nuxtApp.hook("apollo:auth", ({ token }) => {
    if (process.client) {
      const sessionData = JSON.parse(localStorage.getItem("woo-session"));
      if (sessionData && sessionData.token) {
        token.value = sessionData.token;
      }
    }
  });
});

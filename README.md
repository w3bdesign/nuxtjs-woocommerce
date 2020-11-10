[![CodeFactor](https://www.codefactor.io/repository/github/w3bdesign/nuxtjs-woocommerce/badge)](https://www.codefactor.io/repository/github/w3bdesign/nuxtjs-woocommerce)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=w3bdesign_nuxtjs-woocommerce&metric=alert_status)](https://sonarcloud.io/dashboard?id=w3bdesign_nuxtjs-woocommerce)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=w3bdesign_nuxtjs-woocommerce&metric=code_smells)](https://sonarcloud.io/dashboard?id=w3bdesign_nuxtjs-woocommerce)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=w3bdesign_nuxtjs-woocommerce&metric=sqale_index)](https://sonarcloud.io/dashboard?id=w3bdesign_nuxtjs-woocommerce)

# NuxtJS Ecommerce site with WooCommerce backend

<img src="https://user-images.githubusercontent.com/45217974/98630861-5e1dcd80-231c-11eb-986d-f3857b5e41ed.png" alt="Project screenshot" />

# This is currently a work in progress!

1. Install and activate the following required plugins, in your WordPress plugin directory:

- [woocommerce](https://wordpress.org/plugins/woocommerce) Ecommerce for WordPress.
- [wp-graphql](https://github.com/wp-graphql/wp-graphql) Exposes GraphQL for WordPress.
- [wp-graphql-woocommerce](https://github.com/wp-graphql/wp-graphql-woocommerce) Adds WooCommerce functionality to a WPGraphQL schema.
- [algolia-woo-indexer](https://github.com/w3bdesign/algolia-woo-indexer) Sends WooCommerce products to Algolia. Required for search to work.

Optional plugin:

- [headless-wordpress](https://github.com/w3bdesign/headless-wp) Disables the frontend so only the backend is accessible. (optional)

The current release has been tested and is confirmed working with the following versions:

- WordPress version 5.5.1
- WooCommerce version 4.6.1
- WP GraphQL version 0.13.3
- WooGraphQL version 0.6.1

2. For debugging and testing, install either:

   https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/ (Firefox)

   https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm (Chrome)

   Rename .env.example to .env so the Apollo debugger will correctly load. It will not load if the NODE_ENV variable is not correctly set.

3. Make sure WooCommerce has some products already or import some sample products

   The WooCommerce sample products CSV file is available at `wp-content/plugins/woocommerce/sample-data/sample_products.csv` or [Sample products](sample_products/)

   Import the products at `WP Dashboard > Tools > Import > WooCommerce products(CSV)`

4. Clone or fork the repo and modify `.env` with the URL to the GraphQL endpoint (or set environment variables in the configuration UI for your deployment solution)
5. Start the server with `npm run dev`
6. Enable COD (Cash On Demand) payment method in WooCommerce
7. Add a product to the cart
8. Proceed to checkout
9. Fill in your details and place the order

## Features

- NuxtJS
- Tailwind CSS
- Vue Apollo with GraphQL Codegen
- Responsive design
- Support for simple products and variable products
- GraphQL-based filters

## TODO

- Finish implementing Algolia search
- Maybe implement more animations
- Mobile menu
- Checkout process
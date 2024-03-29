<template>
  <template v-if="data.cart?.contents?.nodes?.length">
    <h1 class="h-10 p-6 text-3xl font-bold text-center">Cart</h1>
    <section class="mt-10">
      <CartItem
        v-for="product in data.cart.contents.nodes"
        :key="product.id"
        :product="product"
        @remove="handleRemoveProduct"
      />
    </section>
    <CommonButton link-to="/checkout" v-if="showCheckoutButton" center-button>
      CHECKOUT
    </CommonButton>
  </template>
  <h2 v-else class="mt-64 text-3xl text-center">Cart is currently empty</h2>
</template>

<script setup>
/**
 * Vue.js component for handling the logic of removing a product from the cart and updating the cart state.
 *
 * @module CartContents
 * @param {Object} props - Object containing the component's properties.
 * @param {Boolean} props.showCheckoutButton - Determines whether the checkout button should be shown or not.
 * @returns {Object} The Vue.js component object.
 */
import GET_CART_QUERY from "@/apollo/queries/GET_CART_QUERY.gql";
import UPDATE_CART_MUTATION from "@/apollo/mutations/UPDATE_CART_MUTATION.gql";

import { useCart } from "@/store/useCart";

const cart = useCart();

defineProps({
  showCheckoutButton: { type: Boolean, required: false, default: false },
});

const { data } = await useAsyncQuery(GET_CART_QUERY);

/**
 * Handles the removal of a product.
 *
 * @param {Object} product - The product to be removed.
 */
const handleRemoveProduct = (product) => {
  const updatedItems = [];

  const { key } = product;

  updatedItems.push({
    key,
    quantity: 0,
  });

  const variables = {
    input: {
      items: updatedItems,
    },
  };

  cart.removeProductFromCart(product);

  const { mutate, onDone, onError } = useMutation(UPDATE_CART_MUTATION, {
    variables,
  });

  mutate(variables);

  onDone(() => {
    document.location = "/cart";
  });
};
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  max-width: 1380px;
  @apply border border-gray-300 rounded-lg shadow;
}

.item {
  @apply lg:m-2 xl:m-4 xl:w-1/6 lg:w-1/6 sm:m-2 w-auto;
}

.item-content {
  @apply inline-block mt-4 w-20 h-12 md:w-full lg:w-full xl:w-full;
}

.removing {
  @apply animate-spin cursor-not-allowed;
}
</style>

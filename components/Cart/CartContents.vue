<template>
  <div>
    <div v-if="data.cart?.contents?.nodes?.length">
      <h1 class="h-10 p-6 text-3xl font-bold text-center">Cart</h1>
      <section class="mt-10">
        <div
          v-for="products in data.cart.contents.nodes"
          :key="products.id"
          class="container mx-auto mt-4 flex-container"
        >
          <div class="item">
            <span class="block mt-2 font-extrabold">Remove: <br /></span>
            <span class="item-content">
              <nuxt-img
                class="mt-2 ml-4 cursor-pointer"
                :class="{ removing: isRemoving }"
                alt="Remove icon"
                aria-label="Remove"
                src="/svg/Remove.svg"
                @click="handleRemoveProduct(products)"
              />
            </span>
          </div>

          <div class="item">
            <span class="block mt-2 font-extrabold">Name: <br /></span>
            <span class="item-content">{{ products.product.node.name }}</span>
          </div>
          <div class="item">
            <span class="block mt-2 font-extrabold">Quantity: <br /> </span>
            <span class="item-content">
              {{ products.quantity }}
            </span>
          </div>
          <div class="item">
            <span class="block mt-2 font-extrabold">Subtotal: <br /></span>
            <span class="item-content"> {{ products.total }} </span>
          </div>
        </div>
      </section>
    </div>
    <h2
      v-if="!data.cart?.contents?.nodes?.length"
      class="mt-64 text-3xl text-center"
    >
      Cart is currently empty
    </h2>
    <CommonButton
      link-to="/checkout"
      v-if="showCheckoutButton && data.cart?.contents?.nodes?.length"
      center-button
      >CHECKOUT</CommonButton
    >
  </div>
</template>

<script setup>
import GET_CART_QUERY from "@/apollo/queries/GET_CART_QUERY.gql";
import UPDATE_CART_MUTATION from "@/apollo/mutations/UPDATE_CART_MUTATION.gql";

import { useCart } from "@/store/useCart";

const isRemoving = useState("isRemoving", () => false);

const cart = useCart();

defineProps({
  showCheckoutButton: { type: Boolean, required: false, default: false },
});

const { data } = await useAsyncQuery(GET_CART_QUERY);

const handleRemoveProduct = (product) => {
  const updatedItems = [];

  const { key } = product;

  updatedItems.push({
    key,
    quantity: 0,
  });

  isRemoving.value = true;

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
    isRemoving.value = false;
    document.location = "/cart";
  });

  onError(() => (isRemoving.value = false));
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

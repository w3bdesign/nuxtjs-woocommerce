<template>
  <div v-if="remoteError">
    <span class="text-xl text-red-500"
      >Error fetching cart. Please refresh the page.</span
    >
  </div>
  <div v-else class="mt-4 lg:mt-0">
    <NuxtLink to="/cart">
      <transition name="cart">
        <span
          v-if="cartLength && !loading"
          class="text-xl text-white no-underline lg:text-black is-active"
        >
          <span class="hidden lg:block">
            <nuxt-img
              alt="Cart icon"
              class="h-12 ml-4 lg:ml-2"
              aria-label="Cart"
              src="/svg/Cart.svg"
            />
          </span>
          <span class="block lg:hidden">
            <Icon
              name="ri:shopping-cart-2-line"
              size="3em"
              class="text-white lg:text-black"
            />
          </span>
        </span>
      </transition>
      <transition name="cart">
        <div v-if="cartLength && !loading">
          <span
            class="absolute w-6 h-6 pb-2 ml-16 -mt-12 text-center text-black bg-white lg:text-white lg:bg-black rounded-full lg:ml-14"
          >
            {{ cartLength }}
          </span>
          <span class="text-white lg:text-black">
            Total: {{ formatPrice(`${subTotal}`) }}
          </span>
        </div>
      </transition>
    </NuxtLink>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, computed, watch } from "vue";

import GET_CART_QUERY from "@/apollo/queries/GET_CART_QUERY.gql";
import { getCookie } from "@/utils/functions";
import { useCart } from "@/store/useCart";

const cart = useCart();
const cartChanged = ref(false);
const loading = ref(true);
const remoteError = ref(false);

const { data, error, pending, execute } = useAsyncQuery(GET_CART_QUERY, {
  fetchPolicy: "cache-and-network",
});

const cartContents = computed(() => data.value?.cart?.contents?.nodes || []);
const cartLength = computed(() =>
  cartContents.value.reduce((total, product) => total + product.quantity, 0)
);
const subTotal = computed(() =>
  cartContents.value.reduce(
    (total, product) => total + Number(product.total.replace(/[^0-9.-]+/g, "")),
    0
  )
);

// Watch for changes in the cart quantity and set a flag if it changes
watch(cartLength, (newLength, oldLength) => {
  if (newLength !== oldLength) {
    cartChanged.value = true;
  }
});

// Execute the query initially
onBeforeMount(() => {
  execute();
});

// When the component is mounted, stop the loading state
loading.value = false;

// Watch for the cartChanged flag and execute the query when it changes
watch(cartChanged, (newValue) => {
  if (
    newValue &&
    process.client &&
    !pending.value &&
    getCookie("woo-session")
  ) {
    execute();
    cartChanged.value = false; // Reset the flag after executing the query
  }
});

// Watch for errors from the Apollo query
watch(error, (newError) => {
  remoteError.value = !!newError;
});
</script>

<template>
  <div>
    <div v-if="remoteError">
      <span class="text-xl text-red-500"
        >Error fetching cart. Please refresh the page.</span
      >
    </div>
    <div v-else class="mt-4 lg:mt-0">
      <NuxtLink to="/cart">
        <transition name="cart">
          <span
            v-if="cartLength"
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
          <div v-if="cartLength">
            <span
              class="absolute w-6 h-6 pb-2 ml-16 -mt-12 text-center text-black bg-white lg:text-white lg:bg-black rounded-full lg:ml-14"
            >
              {{ cartLength }}
            </span>
            <span class="text-white lg:text-black"
              >Total: {{ config.public.currencySymbol }} {{ subTotal }}</span
            >
          </div>
        </transition>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import debounce from "lodash.debounce";
import { ref, watch } from "vue";

import GET_CART_QUERY from "@/apollo/queries/GET_CART_QUERY.gql";

import { getCookie } from "@/utils/functions";

import { useCart } from "@/store/useCart";

const cartLength = useState("cartLength", () => 0);
const subTotal = useState("subTotal", "");
const remoteError = useState("remoteError", () => false);

const config = useRuntimeConfig();

const cart = useCart();

const { data, error, pending, execute } = await useAsyncQuery(GET_CART_QUERY, {
  options: { fetchPolicy: "cache-and-network" },
});

// A ref to track if the cart changed
const cartChanged = ref(false);

/**
 * Updates the display of the cart.
 *
 * @return {void}
 */
const updateCartDisplay = () => {
  if (!data || !data?.value?.cart?.contents?.nodes?.length) {
    return;
  }

  const remoteCartLength = data.value.cart.contents.nodes.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const remoteTotal = data.value.cart.contents.nodes.reduce(
    (total, product) => {
      // Remove non-numeric characters and convert to number
      const productTotal = Number(product.total.replace(/[^0-9.-]+/g, ""));
      return total + productTotal;
    },
    0
  );

  console.log("remoteCartLength", remoteCartLength);
  console.log("cart.getCartQuantity", cart.getCartQuantity);
  console.log("data.value.cart.contents", data.value.cart.contents);
  console.log("remoteTotal", remoteTotal);

  //cartLength.value = cart.getCartQuantity;
  //subTotal.value = cart.getCartTotal;
  cartLength.value = remoteCartLength;
  subTotal.value = remoteTotal;
  remoteError.value = error;

  if (remoteCartLength !== cart.getCartQuantity) {
    cartChanged.value = true;
  }
};

onBeforeMount(() => {
  execute();
  updateCartDisplay();
});

// Debounce the execution of fetching data
const debouncedExecute = debounce(() => {
  if (process.client && !pending.value && getCookie("woo-session")) {
    execute(); // Re-fetch the data
    updateCartDisplay();
  }
}, 1000);

// Watch for changes in the cart state
watch(
  () => cart.getCartQuantity,
  () => {
    cartChanged.value = true;
    debouncedExecute();
  }
);

// Use a longer interval if you still want to use an interval
setInterval(() => {
  if (cartChanged.value) {
    cartChanged.value = false;
    debouncedExecute();
  }
}, 5000);
</script>

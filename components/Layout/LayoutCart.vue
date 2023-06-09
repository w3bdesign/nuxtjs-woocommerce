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
              <img
                alt="Cart icon"
                class="h-12 ml-4 lg:ml-2"
                aria-label="Cart"
                src="~/assets/svg/Cart.svg"
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

const updateCartDisplay = () => {
  if (!data) {
    return;
  }

  cartLength.value = cart.getCartQuantity;
  subTotal.value = cart.getCartTotal;
  remoteError.value = error;
};

onBeforeMount(() => {
  execute();
  updateCartDisplay();
});

setInterval(() => {
  if (process.client && !pending.value && getCookie("woo-session")) {
    updateCartDisplay();
  }
}, 1000);
</script>

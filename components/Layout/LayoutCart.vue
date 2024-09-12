<template>
  <div v-if="cart.error">
    <span class="text-xl text-red-500">
      Error fetching cart. Please refresh the page.
    </span>
  </div>
  <div v-else class="mt-4 lg:mt-0">
    <NuxtLink to="/cart">
      <transition name="cart">
        <span
          v-if="cartLength && !cart.loading"
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
        <div v-if="cartLength && !cart.loading">
          <span
            class="absolute w-6 h-6 pb-2 ml-16 -mt-12 text-center text-black bg-white lg:text-white lg:bg-black rounded-full lg:ml-14"
          >
            {{ cartLength }}
          </span>
          <span class="text-white lg:text-black">
            Total: {{ formatPrice(cartSubtotal) }}
          </span>
        </div>
      </transition>
    </NuxtLink>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCart } from "@/store/useCart";
import { formatPrice } from "@/utils/functions";

const cart = useCart();

const cartLength = computed(() => cart.cartQuantity);
const cartSubtotal = computed(() => cart.cartSubtotal);
</script>

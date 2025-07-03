import { useCart } from "@/store/useCart";

export default defineNuxtPlugin(async (nuxtApp) => {
  const cart = useCart();
  await cart.fetchCart();
});

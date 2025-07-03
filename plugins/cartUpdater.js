import { useCart } from "@/store/useCart";

export default defineNuxtPlugin(() => {
  useCart();
});

import { useCart } from "@/store/useCart";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", () => {
    const cart = useCart();

    cart.refetch();

    // Refetch cart data on route change
    nuxtApp.$router.beforeEach((to, from, next) => {
      cart.refetch();
      next();
    });
  });
});

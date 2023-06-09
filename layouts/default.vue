<template>
  <LayoutNavbar />
  <div class="container mx-auto max-w-[84.375rem]">
    <slot />
  </div>
  <LayoutFooter />
  <LayoutStickyFooter />
</template>

<style>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}

.home-enter,
.home-leave-active {
  opacity: 0;
}

.cart-enter-active,
.cart-leave-active {
  transition: all 0.5s;
}

.cart-enter,
.cart-leave-active {
  opacity: 0;
  transform: translateX(-50px);
  transform: translateY(-50px);
}
</style>

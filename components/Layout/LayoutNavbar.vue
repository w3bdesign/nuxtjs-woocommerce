<template>
  <header
    role="banner"
    class="container flex flex-col justify-center px-0 pt-4 md:pt-6 mx-auto mb-6"
  >
    <div class="flex flex-wrap lg:px-4 items-center">
      <div class="pr-2 my-2 lg:w-3/12 md:w-10/12">
        <div class="ml-4 lg:ml-2 mt-6">
          <nuxt-img
            alt="Logo"
            class="h-16 lg:h-18 ml-[55px] md:ml-0"
            aria-label="Nettbutikk logo"
            src="/svg/Logo.svg"
          />
        </div>
      </div>

      <div class="hidden lg:w-1/12 lg:block" />
      <div
        id="nav-content"
        class="hidden w-full mt-4 bg-black lg:w-8/12 lg:block lg:bg-white lg:mt-0 lg:text-right"
      >
        <div class="px-6 lg:px-0 lg:pt-5 xl:pt-7">
          <div>
            <nav
              id="block-main"
              role="navigation"
              aria-labelledby="block-main-menu"
            >
              <ul
                class="items-center justify-end flex-1 pr-4 -mr-4 list-reset lg:flex"
              >
                <NavItem to="/" label="Home" />
                <NavItem to="/products" label="Products" />
                <NavItem to="/categories" label="Categories" />
                <NavItem to="/search" label="Search" />
                <li
                  class="inline-block py-2 text-xl font-semibold no-underline lg:text-base lg:px-4"
                >
                  <LayoutCart />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
/**
 *
 * Vue.js template for a header section of a web page.
 *
 */
import NavItem from "@/components/Layout/LayoutNavItem.vue";
</script>

<style scoped>
header {
  max-width: 1400px;
}
</style>

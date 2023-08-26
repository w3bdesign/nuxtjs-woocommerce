<template>
  <nav
    id="footer"
    class="fixed bottom-0 z-50 w-full md:hidden lg:hidden xl:hidden"
  >
    <div
      class="container flex flex-wrap items-center justify-between px-6 py-3 mx-auto mt-0 md:min-w-96 bg-blue-800"
    >
      <LayoutMobileMenu />
      <div
        class="order-3 hidden w-full md:flex md:items-center md:w-auto md:order-1"
        id="menu"
      ></div>
      <div class="flex items-center order-2 md:order-3" id="nav-content">
        <LayoutCart />
      </div>
    </div>
  </nav>
</template>

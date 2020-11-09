<template>
  <div>
    <header
      role="banner"
      class="container flex flex-col justify-center px-0 pt-6 mx-0 mx-auto mb-6"
    >
      <div class="flex flex-wrap lg:px-4">
        <div class="w-5/12 pr-2 my-2 overflow-hidden lg:w-3/12">
          <div class="ml-4 lg:ml-0">
            <NuxtLink to="/">
              <img
                class="h-24"
                aria-label="Nettbutikk logo"
                src="~/assets/Logo.svg"
              />
            </NuxtLink>
          </div>
        </div>
        <div class="w-5/12 lg:hidden"></div>
        <div class="flex flex-row w-2/12 px-2 my-2 lg:hidden">
          <div class="self-center block w-full mr-4">
            <button
              id="nav-toggle"
              class="text-first"
              aria-haspopup="true"
              aria-expanded="false"
              aria-controls="menu"
              aria-label="Navigation"
            >
              <img
                class="w-32 -ml-10 open align-end"
                src="https://www.flaticon.com/svg/static/icons/svg/1828/1828859.svg"
              />
              <img
                class="hidden w-1/2 close"
                src="https://www.flaticon.com/svg/static/icons/svg/61/61155.svg"
              />
            </button>
          </div>
        </div>
        <div class="hidden lg:w-1/12 lg:block"></div>
        <div
          id="nav-content"
          class="hidden w-full mt-4 bg-black lg:w-8/12 lg:block lg:bg-white lg:mt-0 lg:text-right"
          aria-expanded="false"
        >
          <div class="px-6 lg:px-0 lg:pt-5 xl:pt-7">
            <div>
              <nav
                id="block-main"
                role="navigation"
                aria-labelledby="block-main-menu"
              >
                <ul
                  class="items-center justify-end flex-1 pr-4 -mr-10 list-reset lg:flex"
                >
                  <li
                    class="inline-block py-2 text-xl font-semibold no-underline lg:text-base lg:px-4"
                  >
                    <NuxtLink to="/">
                      <span
                        class="text-xl text-white no-underline lg:text-black is-active"
                      >
                        Home
                      </span>
                    </NuxtLink>
                  </li>
                  <li
                    class="inline-block py-2 text-xl font-semibold no-underline lg:text-base lg:px-4"
                  >
                    <NuxtLink to="/products">
                      <span
                        class="text-xl text-white no-underline lg:text-black"
                        >Products</span
                      >
                    </NuxtLink>
                  </li>
                  <li
                    class="inline-block py-2 text-xl font-semibold no-underline lg:text-base lg:px-4"
                  >
                    <NuxtLink to="/categories">
                      <span
                        class="text-xl text-white no-underline lg:text-black is-active"
                        >Categories</span
                      >
                    </NuxtLink>
                  </li>
                  <li
                    class="inline-block py-2 text-xl font-semibold no-underline lg:text-base lg:px-4"
                  >
                    <NuxtLink to="/cart">
                      <span
                        class="text-xl text-white no-underline lg:text-black is-active"
                      >
                        <img
                          class="h-12"
                          aria-label="Cart"
                          src="~/assets/Cart.svg"
                      /></span>
                    </NuxtLink>
                  </li>
                  <li
                    class="inline-block py-2 text-xl font-semibold no-underline lg:text-base lg:px-4"
                  >
                    <span
                      class="text-xl text-white no-underline lg:text-black is-active"
                    >
                      <img
                        class="h-12 cursor-pointer"
                        aria-label="Cart"
                        src="~/assets/Search.svg"
                    /></span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style></style>

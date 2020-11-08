<template>
  <div>
    <header
      role="banner"
      class="px-0 mx-0 container mx-auto pt-6 mb-6 flex flex-col justify-center"
    >
      <div class="flex flex-wrap lg:px-4">
        <div class="my-2 pr-2 w-5/12 lg:w-3/12 overflow-hidden">
          <div class="ml-4 lg:ml-0">
            <a href="/">
              <img
                class="md:pl-6"
                src="https://pngimage.net/wp-content/uploads/2019/05/fake-logo-png-.png"
              />
            </a>
          </div>
        </div>
        <div class="w-5/12 lg:hidden"></div>
        <div class="my-2 px-2 w-2/12 lg:hidden flex flex-row">
          <div class="self-center block mr-4 w-full">
            <button
              id="nav-toggle"
              class="text-first"
              aria-haspopup="true"
              aria-expanded="false"
              aria-controls="menu"
              aria-label="Navigation"
            >
              <img
                class="open w-1/2 align-end"
                src="https://www.flaticon.com/svg/static/icons/svg/1828/1828859.svg"
              />
              <img
                class="close hidden w-1/2"
                src="https://www.flaticon.com/svg/static/icons/svg/61/61155.svg"
              />
            </button>
          </div>
        </div>
        <div class="lg:w-1/12 hidden lg:block"></div>
        <div
          id="nav-content"
          class="w-full lg:w-8/12 hidden lg:block bg-black lg:bg-white mt-4 lg:mt-0 lg:text-right"
          aria-expanded="false"
        >
          <div class="px-6 lg:px-0 lg:pt-5 xl:pt-7">
            <div>
              <nav
                id="block-main"
                role="navigation"
                aria-labelledby="block-main-menu"
              >
                <ul class="list-reset lg:flex justify-end flex-1 items-center">
                  <li
                    class="inline-block w-full lg:text-base font-semibold no-underline py-2 lg:px-4"
                  >
                    <a
                      href="/"
                      class="text-white text-2xl lg:text-black no-underline is-active"
                      >Home</a
                    >
                  </li>
                  <li
                    class="inline-block w-full text-xl lg:text-base font-semibold no-underline py-2 lg:px-4"
                  >
                    <a
                      href="/page-2"
                      class="text-white text-2xl lg:text-black no-underline"
                      >Products</a
                    >
                  </li>
                  <li
                    class="inline-block w-full text-xl lg:text-base font-semibold no-underline py-2 lg:px-4"
                  >
                    <a
                      href="/page-3"
                      class="text-white text-2xl lg:text-black no-underline is-active"
                      >Categories</a
                    >
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

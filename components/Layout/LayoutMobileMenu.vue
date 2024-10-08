<template>
  <div class="relative">
    <Transition
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeOutRight"
    >
      <div
        v-if="expandedMenu"
        ref="mobileMenu"
        class="fixed left-0 w-screen z-10 bg-white overflow-y-auto mobile-menu"
      >
        <ul>
          <li class="text-xl linkStyle">
            <NuxtLink to="/" @click="displayMobileMenu"> Home </NuxtLink>
          </li>
          <li class="text-xl linkStyle">
            <NuxtLink to="/products" @click="displayMobileMenu">
              Products
            </NuxtLink>
          </li>
          <li class="text-xl linkStyle">
            <NuxtLink to="/categories" @click="displayMobileMenu">
              Categories
            </NuxtLink>
          </li>
          <li class="text-xl linkStyle">
            <NuxtLink to="/search" @click="displayMobileMenu">
              Search
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
    <div class="w-5/12 lg:hidden" />
    <div class="flex flex-row w-2/12 px-2 my-2 lg:hidden">
      <div class="self-center block w-full mr-4">
        <button
          id="nav-toggle"
          class="mt-2 burger burger-squeeze"
          aria-haspopup="true"
          :aria-expanded="expandedMenu"
          aria-controls="menu"
          aria-label="Navigation"
          :class="{ open: expandedMenu }"
          @click="displayMobileMenu"
        >
          <div class="burger-lines" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const expandedMenu = useState("expandedMenu", () => false);
const mobileMenu = ref(null);

const displayMobileMenu = () => {
  expandedMenu.value = !expandedMenu.value;
};
</script>

<style scoped>
.mobile-menu {
  top: 0;
  bottom: 80px;
  max-height: calc(100vh - 80px);
}

.linkStyle {
  @apply w-auto p-4 m-4 font-bold text-center border border-gray-300 border-opacity-50 shadow-md rounded;
}

.linkStyleCart {
  @apply w-auto p-4 m-4 font-bold text-center;
}

.burger {
  height: 3em;
  width: 3em;
  position: relative;
  font-size: 14px;
  cursor: pointer;
  transition: 0.5s all;
  -webkit-tap-highlight-color: transparent;
}

.burger .burger-lines:after {
  left: 0;
  top: -1em;
}

.burger .burger-lines:before {
  left: 1em;
  top: 1em;
}

.burger:after {
  content: "";
  display: block;
  position: absolute;
  height: 150%;
  width: 150%;
  top: -25%;
  left: -25%;
}

.burger .burger-lines {
  top: 50%;
  margin-top: -0.125em;
}

.burger .burger-lines,
.burger .burger-lines:after,
.burger .burger-lines:before {
  pointer-events: none;
  display: block;
  content: "";
  width: 100%;
  border-radius: 0.25em;
  background-color: #fff;
  height: 0.25em;
  position: absolute;
  transform: rotate(0);
}

.burger.burger-squeeze .burger-lines,
.burger.burger-squeeze .burger-lines:after,
.burger.burger-squeeze .burger-lines:before {
  transition:
    0.2s top 0.2s,
    0.1s left,
    0.2s transform,
    0.4s background-color 0.2s;
}
.burger.burger-squeeze .burger-lines:after,
.burger.burger-squeeze .burger-lines:before {
  width: 2em;
}
.burger.burger-squeeze.open .burger-lines,
.burger.burger-squeeze.open .burger-lines:after,
.burger.burger-squeeze.open .burger-lines:before {
  transition:
    0.2s background-color,
    0.2s top,
    0.2s left,
    0.2s transform 0.15s;
}
.burger.burger-squeeze.open .burger-lines {
  background-color: transparent;
}
.burger.burger-squeeze.open .burger-lines:before,
.burger.burger-squeeze.open .burger-lines:after {
  left: 0.5em;
  top: 0px;
}
.burger.burger-squeeze.open .burger-lines:before {
  transform: rotate(-45deg);
}
.burger.burger-squeeze.open .burger-lines:after {
  transform: rotate(45deg);
}
</style>

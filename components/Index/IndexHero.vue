<template>
  <div>
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <nuxt-img
            class="mx-auto"
            alt="Image slider slide #1"
            src="/images/Hero.jpg"
          />
          <div
            class="flex flex-col items-start justify-center w-full mx-auto tracking-wide lg:w-1/2"
          >
            <span
              class="w-full p-4 mt-4 text-center text-white bg-black text-md lg:text-2xl lg:-mt-64"
            >
              Modern Interior Sample #1
            </span>
          </div>
        </div>

        <div class="swiper-slide">
          <nuxt-img
            class="mx-auto"
            alt="Image slider slide #1"
            src="/images/Hero2.jpg"
          />
          <div
            class="flex flex-col items-start justify-center w-full mx-auto tracking-wide lg:w-1/2"
          >
            <span
              class="w-full p-4 mt-4 text-center text-white bg-black text-md lg:text-2xl lg:-mt-64"
            >
              Modern Interior Sample #2
            </span>
          </div>
        </div>
        <div class="swiper-slide">
          <nuxt-img
            class="mx-auto"
            alt="Image slider slide #1"
            src="/images/Hero3.jpg"
          />
          <div
            class="flex flex-col items-start justify-center w-full mx-auto tracking-wide lg:w-1/2"
          >
            <span
              class="w-full p-4 mt-4 text-center text-white bg-black text-md lg:text-2xl lg:-mt-64"
            >
              Modern Interior Sample #3
            </span>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

onMounted(() => {
  swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
</script>

<style scoped>
#hero {
  max-width: 1350px;
}

.swiper {
  width: 100%;
}
</style>

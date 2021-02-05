<template>
  <div>
    <swiper id="hero" ref="mySwiper" :options="swiperOption">
      <swiper-slide
        ><img src="~assets/images/Hero.jpg" />
        <div
          class="flex flex-col items-start justify-center w-full mx-auto tracking-wide lg:w-1/2"
        >
          <span
            class="w-full p-4 mt-4 text-center text-white bg-black text-md lg:text-2xl lg:-mt-64"
          >
            Modern Pillow Sample Set
          </span>
        </div>
      </swiper-slide>
      <swiper-slide
        ><img src="~assets/images/Hero2.jpg" />
        <div
          class="flex flex-col items-start justify-center w-full mx-auto tracking-wide lg:w-1/2"
        >
          <span
            class="w-full p-4 mt-4 text-center text-white bg-black text-md lg:text-2xl lg:-mt-64"
          >
            Modern Interior Sample
          </span>
        </div>
      </swiper-slide>
      <div
        slot="button-prev"
        class="swiper-button-prev"
        @click="swiper.slidePrev(1000, false)"
      ></div>
      <div
        slot="button-next"
        class="swiper-button-next"
        @click="swiper.slideNext(1000, false)"
      ></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

import 'swiper/swiper-bundle.min.css'

export default {
  name: 'Hero',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  mounted() {
    this.swiper.slideTo(2, 2000, false)
  },
}
</script>

<style lang="postcss" scoped>
#hero {
  max-width: 1350px;
}
</style>

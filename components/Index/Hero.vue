<template>
  <div id="hero">
    <img alt="Image slider slide #1" src="~assets/images/Hero.jpg" />
    <div
      class="flex flex-col items-start justify-center w-full mx-auto tracking-wide lg:w-1/2"
    >
      <span
        class="w-full p-4 mt-4 text-center text-white bg-black text-md lg:text-2xl lg:-mt-64"
      >
        Modern Interior Sample
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style lang="postcss" scoped>
#hero {
  max-width: 1350px;
}
</style>

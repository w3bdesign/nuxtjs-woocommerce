<template>
  <div>
    <div
      id="hero"
      class="flex w-full mx-auto mt-16 bg-right bg-cover md:pt-0 md:items-center"
    >
      <div
        class="flex flex-col items-start justify-center w-full px-6 tracking-wide lg:w-1/2"
      >
        <span class="p-4 my-4 text-2xl text-white bg-black rounded-lg">
          Modern Pillow Sample Set
        </span>
      </div>
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
  background-image: url('~assets/Hero.jpg');
  height: 24rem;
  max-width: 1376px;
}
</style>

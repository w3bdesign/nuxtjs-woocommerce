<template>
  <div>
    <div
      id="hero"
      class="flex w-full mx-auto mt-20 bg-right bg-cover md:pt-0 md:items-center"
    >
      <div
        class="flex flex-col items-start justify-center w-full px-6 tracking-wide lg:w-1/2"
      >
        <span class="p-4 my-4 text-2xl text-white bg-black rounded-lg">
          Stripete Zig Zag Pute Sett
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
  background-image: url('https://nextjs-woocommerce.now.sh/_next/static/media/hero.d989217c87215a6b28e263ae4aea50bf.jpg');
  height: 24rem;
}
</style>

<template>
  <div>
    <Navbar />
    <div class="container mx-auto">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Layout',
}
</script>

<style>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>

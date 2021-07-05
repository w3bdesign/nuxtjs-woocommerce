<template>
  <div class="container mx-auto mt-24">
    <footer
      class="
        px-6
        text-center
        bg-white
        border border-gray-300
        rounded-lg
        shadow-lg
      "
    >
      <div class="p-6">Copyright &copy; {{ todayDate }} Daniel / w3bdesign</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    todayDate() {
      return new Date().getFullYear()
    },
  },
}
</script>

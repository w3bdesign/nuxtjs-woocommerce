<template>
  <div class="container mx-auto mt-24 max-w-[84.375rem]">
    <footer
      class="px-6 text-center bg-white border border-gray-300 rounded-lg shadow-lg"
    >
      <div class="p-6">
        Copyright reserved &copy; {{ todayDate }} Daniel / w3bdesign
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const todayDate = computed(() => new Date().getFullYear())
</script>

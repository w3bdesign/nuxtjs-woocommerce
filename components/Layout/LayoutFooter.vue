<template>
  <div class="container mx-auto mt-24 max-w-[84.375rem] mb-[6.5rem] md:mb-2">
    <footer
      class="px-6 text-center bg-white border border-gray-300 rounded-lg shadow-lg"
    >
      <div class="p-6">
        Copyright reserved &copy; {{ todayDate }} Daniel
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from "vue";

const todayDate = computed(() => new Date().getFullYear());
</script>

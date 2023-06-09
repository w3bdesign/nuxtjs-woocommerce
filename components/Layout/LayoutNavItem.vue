<template>
  <li
    class="inline-block py-2 text-xl font-semibold no-underline lg:text-base lg:px-4"
  >
    <NuxtLink :to="to">
      <span class="text-xl text-white no-underline lg:text-black">
        {{ label }}
      </span>
    </NuxtLink>
  </li>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>

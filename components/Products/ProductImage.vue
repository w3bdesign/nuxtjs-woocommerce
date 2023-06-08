<template>
  <img
    id="product-image"
    class="h-auto p-8 transition duration-500 ease-in-out transform xl:p-2 md:p-2 lg:p-2 hover:shadow-lg hover:scale-95"
    :alt="alt"
    :src="displayedImage"
  />
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  alt: { type: String, required: true },
  src: { type: String, required: true },
});

const config = useRuntimeConfig();

const displayedImage = computed(() => {
  return props.src || config.placeholderImage;
});
</script>

<template>
  <img
    id="product-image"
    class="h-auto p-8 transition duration-500 ease-in-out transform md:p-0 hover:shadow-lg hover:scale-95"
    :alt="alt"
    :src="displayedImage"
    :width="width"
    :height="height"
  />
</template>

<script setup>
/**
 * Vue.js component for displaying an image with configurable properties.
 *
 * @param {Object} props - Object containing the component's properties.
 * @param {String} props.alt - The alt text for the image (required).
 * @param {String} props.src - The source URL for the image (required).
 * @param {String} [props.width] - The width of the image.
 * @param {String} [props.height] - The height of the image.
 * @returns {Object} The Vue.js component object.
 */

import { computed } from "vue";

const props = defineProps({
  alt: { type: String, required: true },
  src: { type: String, required: true },
  width: { type: String, required: false },
  height: { type: String, required: false },
});

const config = useRuntimeConfig();

const displayedImage = computed(() => {
  return props.src || config.public.placeholderImage;
});
</script>

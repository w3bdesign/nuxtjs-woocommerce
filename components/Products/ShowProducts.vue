<template>
  <div>
    <section class="container mx-auto bg-white">
      <div id="product-container" class="flex flex-wrap items-center">
        <template v-for="data in products">
          <template v-for="product in data">
            <div :key="product.id" class="flex flex-col p-6 md:w-1/2 xl:w-1/4">
              <NuxtLink to="">
                <img
                  id="product-image"
                  class="transition duration-500 ease-in-out transform cursor-pointer hover:grow hover:shadow-lg hover:scale-105"
                  :alt="product.name"
                  :src="product.image && product.image.sourceUrl"
                />
                <div class="flex justify-center pt-3">
                  <p class="font-bold text-center cursor-pointer">
                    {{ product.name }}
                  </p>
                </div>
              </NuxtLink>
            </div>
          </template>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ShowProducts',
  props: {
    products: { type: Object, required: true },
    // TODO Add more prop types here
  },
}
</script>

<style></style>

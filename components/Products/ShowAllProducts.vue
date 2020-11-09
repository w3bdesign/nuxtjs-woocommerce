<template>
  <div>
    <section>
      <div id="product-container" class="flex flex-wrap items-center">
        <template v-for="data in products">
          <template v-for="product in data">
            <div
              v-if="product.slug !== undefined"
              :key="product.id"
              class="flex flex-col p-4 mt-4 md:w-1/2 xl:w-1/4"
            >
              <NuxtLink
                class="text-black cursor-pointer hover:underline"
                :to="{
                  path: '/product/' + product.slug,
                  query: { id: product.databaseId },
                }"
              >
                <img
                  id="product-image"
                  class="transition duration-500 ease-in-out transform cursor-pointer hover:shadow-lg hover:scale-110"
                  :alt="product.name"
                  :src="productImage(product)"
                />

                <div class="flex justify-center pt-3">
                  <p class="text-2xl font-bold text-center cursor-pointer">
                    {{ product.name }}
                  </p>
                </div>
              </NuxtLink>
              <br />

              <div v-if="product.onSale" class="flex justify-center">
                <div class="pt-2 text-gray-900 line-through">
                  {{ product.regularPrice }}
                </div>
                <div class="pt-2 ml-2 text-lg text-gray-900">
                  {{ product.salePrice }}
                </div>
              </div>
              <div v-else>
                <p class="pt-2 text-lg text-center text-gray-900">
                  {{ product.price }}
                </p>
              </div>
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
  methods: {
    productImage(product) {
      return product.image
        ? product.image.sourceUrl
        : process.env.placeholderSmallImage
    },
  },
}
</script>

<style scoped>
a:hover {
  border: none;
}
</style>

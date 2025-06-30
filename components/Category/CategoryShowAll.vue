<template>
  <div v-if="categories.productCategories">
    <section class="bg-white">
      <div class="flex justify-center align-middle flex-col md:flex-row">
        <template v-for="nodes in categories.productCategories">
          <template v-for="category in nodes">
            <div v-if="category.slug !== undefined" :key="category.id">
              <NuxtLink
                class="text-black cursor-pointer hover:underline"
                :to="{
                  path: '/category/' + category.slug,
                  query: { id: category.id },
                }"
              >
                <div
                  class="cursor-pointer ml-4 mt-[5rem] md:mt-[20rem] w-full md:w-64 flex-row"
                >
                  <div
                    class="p-4 min-w-[10rem] flex items-center justify-center w-full h-16 text-center border border-gray-300 rounded-lg shadow hover:shadow-outline"
                  >
                    <p class="text-lg">
                      {{ category.name }}
                    </p>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </template>
        </template>
      </div>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div v-if="categories">
    <section class="container mx-auto bg-white">
      <div
        class="grid gap-2 px-2 pt-2 pb-2 lg:px-0 xl:px-0 md:px-0 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xs:grid-cols-3"
      >
        <template v-for="nodes in categories">
          <template v-for="category in nodes">
            <div v-if="category.slug !== undefined" :key="category.id">
              <NuxtLink
                class="text-black cursor-pointer hover:underline"
                :to="{
                  path: '/category/' + category.slug,
                  query: { id: category.id },
                }"
              >
                <div class="p-6 cursor-pointer">
                  <div
                    class="flex items-center justify-center w-full h-16 text-center border border-gray-300 rounded-lg shadow hover:shadow-outline"
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
const { categories } = defineProps({
  categories: {
    type: [Object],
  },
})
</script>

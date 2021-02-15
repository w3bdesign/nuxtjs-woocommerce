<template>
  <div>
    <div class="flex items-center text-xl text-input">
      <input type="text" placeholder="Click to search" />
      <div class="search-input__icon">
        <svg width="25" height="25" viewBox="0 0 16 16">
          <path
            fill="#333"
            d="M9.962 8.716c0.653-0.905 1.038-2.015 1.038-3.216 0-3.038-2.462-5.5-5.5-5.5s-5.5 2.462-5.5 5.5 2.462 5.5 5.5 5.5c1.201 0 2.312-0.385 3.216-1.038l5.284 6.038 2-2-6.038-5.284zM5.5 9.5c-2.209 0-4-1.791-4-4s1.791-4 4-4c2.209 0 4 1.791 4 4s-1.791 4-4 4z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
// https://www.algolia.com/doc/guides/building-search-ui/going-further/server-side-rendering/vue/#with-nuxt
export default {
  name: 'Search',
}
</script>

<style scoped>
.text-input {
  @apply p-2 text-gray-800 placeholder-gray-800 border border-gray-400 rounded shadow-md;
}
</style>

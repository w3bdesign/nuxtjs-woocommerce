<template>
  <div>
    <div class="relative text-xl text-white no-underline is-active">
      <input
        class="p-2 text-gray-800 placeholder-gray-800 border border-gray-400 rounded shadow-md"
        type="text"
        placeholder="Click to search"
      />
      <div
        class="absolute inset-y-0 flex items-center pl-56 pointer-events-none"
      >
        <svg
          class="w-6 h-6 text-gray-500 pointer-events-none fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
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

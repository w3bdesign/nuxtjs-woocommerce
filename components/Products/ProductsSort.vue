<template>
  <div class="flex items-center gap-2">
    <label for="sort-select" class="text-base text-gray-700">Sortering:</label>
    <select
      id="sort-select"
      class="min-w-[140px] border border-gray-200 rounded-lg px-3 py-2 text-base bg-gray-50 text-gray-700 focus:outline-none"
      disabled
    >
      <option value="popular">Populær</option>
      <option value="price-low">Pris: Lav til Høy</option>
      <option value="price-high">Pris: Høy til Lav</option>
      <option value="newest">Nyeste</option>
    </select>
  </div>
</template>

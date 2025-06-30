<template>
  <div class="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-4">
    <label for="sort-select" class="text-sm font-medium">Sortering:</label>
    <select
      id="sort-select"
      class="min-w-[140px] border rounded-md px-3 py-1.5 text-sm"
      disabled
    >
      <option value="popular">Populær</option>
      <option value="price-low">Pris: Lav til Høy</option>
      <option value="price-high">Pris: Høy til Lav</option>
      <option value="newest">Nyeste</option>
    </select>
  </div>
</template>

<script setup>
// No logic yet, purely presentational
</script>

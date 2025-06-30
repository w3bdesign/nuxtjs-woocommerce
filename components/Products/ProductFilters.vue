<template>
  <div class="w-full md:w-64 flex-shrink-0">
    <div class="bg-white px-8 pb-8 sm:px-6 sm:pb-6 rounded-lg shadow-sm">
      <div class="mb-8">
        <h3 class="font-semibold mb-4">PRODUKT TYPE</h3>
        <div class="space-y-2">
          <div class="flex items-center">
            <input type="checkbox" id="clothing" class="form-checkbox h-4 w-4 text-blue-600 rounded" disabled />
            <label for="clothing" class="ml-2 text-sm">Clothing</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="tshirts" class="form-checkbox h-4 w-4 text-blue-600 rounded" disabled />
            <label for="tshirts" class="ml-2 text-sm">Tshirts</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="uncategorized" class="form-checkbox h-4 w-4 text-blue-600 rounded" disabled />
            <label for="uncategorized" class="ml-2 text-sm">Uncategorized</label>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="font-semibold mb-4">PRIS</h3>
        <div class="flex items-center space-x-2">
          <input type="range" min="0" max="1000" class="w-full accent-blue-600" disabled />
        </div>
        <div class="flex justify-between text-sm mt-1">
          <span>kr 0</span>
          <span>kr 1000</span>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="font-semibold mb-4">STØRRELSE</h3>
        <div class="grid grid-cols-1 gap-2">
          <button class="px-4 py-1 rounded border text-sm bg-gray-100 text-gray-800" disabled>Large</button>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="font-semibold mb-4">FARGE</h3>
        <div class="grid grid-cols-1 gap-2">
          <button class="w-8 h-8 rounded-full bg-blue-500" disabled></button>
        </div>
      </div>

      <button class="mt-4 w-full py-2 rounded bg-gray-100 text-gray-500 text-sm font-medium" disabled>
        Resett filter
      </button>
    </div>
  </div>
</template>

<script setup>
// No logic yet, purely presentational
</script>

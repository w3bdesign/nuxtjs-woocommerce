<template>
  <div class="w-full md:w-64 flex-shrink-0">
    <div class="bg-white px-8 pb-8 sm:px-6 sm:pb-6 rounded-lg shadow-sm">
      <!-- PRODUCT TYPE -->
      <div class="mb-8">
        <h3 class="font-semibold mb-4">PRODUKT TYPE</h3>
        <div class="space-y-2">
          <!-- Example checkboxes, replace with dynamic content later -->
          <div class="flex items-center">
            <input type="checkbox" id="type1" class="mr-2" />
            <label for="type1" class="text-sm">Type 1</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="type2" class="mr-2" />
            <label for="type2" class="text-sm">Type 2</label>
          </div>
        </div>
      </div>

      <!-- PRICE -->
      <div class="mb-8">
        <h3 class="font-semibold mb-4">PRIS</h3>
        <div class="flex items-center space-x-2">
          <input type="range" min="0" max="1000" class="w-full" />
          <span class="text-sm">kr 0 - kr 1000</span>
        </div>
      </div>

      <!-- SIZE -->
      <div class="mb-8">
        <h3 class="font-semibold mb-4">STØRRELSE</h3>
        <div class="grid grid-cols-3 gap-2">
          <button class="px-2 py-1 rounded border text-sm">S</button>
          <button class="px-2 py-1 rounded border text-sm">M</button>
          <button class="px-2 py-1 rounded border text-sm">L</button>
        </div>
      </div>

      <!-- COLOR -->
      <div class="mb-8">
        <h3 class="font-semibold mb-4">FARGE</h3>
        <div class="grid grid-cols-3 gap-2">
          <button class="w-8 h-8 rounded-full bg-red-500"></button>
          <button class="w-8 h-8 rounded-full bg-blue-500"></button>
          <button class="w-8 h-8 rounded-full bg-green-500"></button>
        </div>
      </div>

      <button class="mt-4 w-full py-2 rounded bg-gray-200 text-gray-700 text-sm font-medium">Resett filter</button>
    </div>
  </div>
</template>

<script setup>
// No logic yet, purely presentational
</script>

<template>
  <div class="w-full md:w-64 flex-shrink-0">
    <div class="bg-white px-8 pb-8 sm:px-6 sm:pb-6 rounded-lg shadow-sm">
      <div class="mb-8">
        <h3 class="font-semibold mb-4">PRODUKT TYPE</h3>
        <div class="space-y-2">
          <CommonCheckbox
            v-for="type in productTypes"
            :key="type.id"
            :id="type.id"
            :label="type.name"
            :modelValue="type.checked"
            @change="(checked) => toggleProductType(type.id)"
          />
        </div>
      </div>

      <div class="mb-8">
        <h3 class="font-semibold mb-4">PRIS</h3>
        <CommonRangeSlider
          id="price-range"
          label="Pris"
          :min="0"
          :max="1000"
          :value="priceRange[1]"
          :startValue="priceRange[0]"
          @input="(value) => setPriceRange([priceRange[0], value])"
        />
      </div>

      <div class="mb-8">
        <h3 class="font-semibold mb-4">STØRRELSE</h3>
        <div class="grid grid-cols-3 gap-2">
          <CommonButton
            v-for="size in sizes"
            :key="size"
            :selected="selectedSizes.includes(size)"
            variant="filter"
            @click="() => toggleSize(size)"
          >
            {{ size }}
          </CommonButton>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="font-semibold mb-4">FARGE</h3>
        <div class="grid grid-cols-3 gap-2">
          <CommonColorSwatch
            v-for="color in colors"
            :key="color.name"
            :color="color.hex"
            :title="color.name"
            :class="{ 'ring-2 ring-offset-2 ring-gray-900': selectedColors.includes(color.name) }"
            @click="() => toggleColor(color.name)"
            style="cursor:pointer"
          />
        </div>
      </div>

      <CommonButton variant="reset" class="mt-4 w-full" @click="resetFilters">
        Resett filter
      </CommonButton>
    </div>
  </div>
</template>

<script setup>
defineProps({
  productTypes: Array,
  toggleProductType: Function,
  priceRange: Array,
  setPriceRange: Function,
  sizes: Array,
  selectedSizes: Array,
  toggleSize: Function,
  colors: Array,
  selectedColors: Array,
  toggleColor: Function,
  resetFilters: Function,
});
</script>

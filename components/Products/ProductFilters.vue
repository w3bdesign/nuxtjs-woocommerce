<template>
  <div class="w-full md:w-64 flex-shrink-0">
    <div class="bg-white px-8 pb-8 sm:px-6 sm:pb-6 rounded-lg shadow-sm">
      <div class="mb-8">
        <h3 class="font-semibold mb-4">PRODUKT TYPE</h3>
        <div class="space-y-2">
          <Checkbox id="clothing" label="Clothing" :checked="false" />
          <Checkbox id="tshirts" label="Tshirts" :checked="false" />
          <Checkbox id="uncategorized" label="Uncategorized" :checked="false" />
        </div>
      </div>

      <div class="mb-8">
        <h3 class="font-semibold mb-4">PRIS</h3>
        <RangeSlider
          id="price-range"
          label="Pris"
          :min="0"
          :max="1000"
          :value="1000"
          :startValue="0"
          :formatValue="(v) => `kr ${v}`"
          :disabled="true"
        />
      </div>

      <div class="mb-8">
        <h3 class="font-semibold mb-4">STØRRELSE</h3>
        <div class="grid grid-cols-3 gap-2">
          <Button :selected="true" variant="filter" :disabled="true"
            >Large</Button
          >
        </div>
      </div>

      <div class="mb-8">
        <h3 class="font-semibold mb-4">FARGE</h3>
        <div class="grid grid-cols-3 gap-2">
          <button
            class="w-8 h-8 rounded-full flex items-center justify-center text-xs bg-blue-500"
            :disabled="true"
            title="Blue"
          ></button>
        </div>
      </div>

      <Button variant="reset" class="mt-4 w-full" :disabled="true">
        Resett filter
      </Button>
    </div>
  </div>
</template>

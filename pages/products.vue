<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row gap-8">
      <ProductsFilters
        :productTypes="productTypes"
        :toggleProductType="toggleProductType"
        :priceRange="priceRange"
        :setPriceRange="setPriceRange"
        :sizes="sizes"
        :selectedSizes="selectedSizes"
        :toggleSize="toggleSize"
        :colors="colors"
        :selectedColors="selectedColors"
        :toggleColor="toggleColor"
        :resetFilters="resetFilters"
      />
      <div class="flex-1">
        <div
          class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8"
        >
          <h1 class="text-xl sm:text-2xl font-medium text-center sm:text-left">
            Produkter
          </h1>
          <ProductsSort v-model="sortBy" />
        </div>
        <ProductsShowAll
          :sortBy="sortBy"
          :selectedSizes="selectedSizes"
          :selectedColors="selectedColors"
          :priceRange="priceRange"
          :productTypes="productTypes"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const sortBy = ref("popular");
const selectedSizes = ref([]);
const selectedColors = ref([]);
const priceRange = ref([0, 1000]);
const productTypes = ref([
  { id: "clothing", name: "Clothing", checked: false },
  { id: "tshirts", name: "Tshirts", checked: false },
  { id: "uncategorized", name: "Uncategorized", checked: false },
]);
const sizes = ref(["Large"]);
const colors = ref([{ name: "Blue", hex: "#3b82f6" }]);

function toggleProductType(id) {
  productTypes.value = productTypes.value.map((type) =>
    type.id === id ? { ...type, checked: !type.checked } : type
  );
}
function setPriceRange(newRange) {
  priceRange.value = newRange;
}
function toggleSize(size) {
  if (selectedSizes.value.includes(size)) {
    selectedSizes.value = selectedSizes.value.filter((s) => s !== size);
  } else {
    selectedSizes.value = [...selectedSizes.value, size];
  }
}
function toggleColor(color) {
  if (selectedColors.value.includes(color)) {
    selectedColors.value = selectedColors.value.filter((c) => c !== color);
  } else {
    selectedColors.value = [...selectedColors.value, color];
  }
}
function resetFilters() {
  selectedSizes.value = [];
  selectedColors.value = [];
  priceRange.value = [0, 1000];
  productTypes.value = productTypes.value.map((type) => ({ ...type, checked: false }));
}
</script>

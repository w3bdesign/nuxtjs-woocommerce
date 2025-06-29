import { defineStore } from "pinia";
import FETCH_ALL_PRODUCTS_QUERY from "@/apollo/queries/FETCH_ALL_PRODUCTS_QUERY.gql";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
    loading: false,
    error: null,
    sortBy: "popularity",
    selectedSizes: [],
    selectedColors: [],
    priceRange: [0, 1000],
    productTypes: [],
  }),

  getters: {
    filteredProducts(state) {
      let products = [...state.products];

      // Filter by product type
      const selectedTypes = state.productTypes
        .filter((t) => t.checked)
        .map((t) => t.name.toLowerCase());

      if (selectedTypes.length > 0) {
        products = products.filter((product) => {
          const productCategories =
            product.productCategories?.nodes.map((cat) =>
              cat.name.toLowerCase()
            ) || [];
          return selectedTypes.some((type) =>
            productCategories.includes(type)
          );
        });
      }

      // Filter by price
      products = products.filter((product) => {
        if (!product.price) return false;
        const price = parseFloat(product.price.replace(/[^0-9.-]+/g, ""));
        return price >= state.priceRange[0] && price <= state.priceRange[1];
      });

      // Sort products
      return [...products].sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
        const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));

        switch (state.sortBy) {
          case "price-asc":
            return priceA - priceB;
          case "price-desc":
            return priceB - priceA;
          case "newest":
            return b.databaseId - a.databaseId;
          default: // 'popularity'
            return 0;
        }
      });
    },
    getUniqueProductTypes(state) {
        const productTypes = state.products.flatMap(p => p.productCategories.nodes);
        const unique = [];
        const map = new Map();
        for (const item of productTypes) {
            if(!map.has(item.id)){
                map.set(item.id, true);
                unique.push({
                    id: item.id,
                    name: item.name,
                    checked: false
                });
            }
        }
        return unique;
    }
  },

  actions: {
    async fetchProducts() {
      this.loading = true;
      this.error = null;
      try {
        const { data, error } = await useAsyncQuery(FETCH_ALL_PRODUCTS_QUERY);

        if (error.value) {
          throw new Error(error.value);
        }

        if (data.value && data.value.products && data.value.products.nodes) {
          this.products = data.value.products.nodes;
          this.productTypes = this.getUniqueProductTypes;
        }
      } catch (e) {
        this.error = e.message;
      } finally {
        this.loading = false;
      }
    },
    setSortBy(sortBy) {
      this.sortBy = sortBy;
    },
    setPriceRange(range) {
      this.priceRange = range;
    },
    toggleProductType(id) {
        const productType = this.productTypes.find(pt => pt.id === id);
        if (productType) {
            productType.checked = !productType.checked;
        }
    },
    resetFilters() {
        this.selectedSizes = [];
        this.selectedColors = [];
        this.priceRange = [0, 1000];
        this.productTypes.forEach(pt => pt.checked = false);
    }
  },
});

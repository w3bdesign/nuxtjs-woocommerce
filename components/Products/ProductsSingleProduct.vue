<template>
  <div v-if="data?.product">
    <section>
      <div class="container flex flex-wrap items-center pt-4 pb-12 mx-auto">
        <div
          class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2"
        >
          <img
            v-if="data.product.image"
            id="product-image"
            class="h-auto p-8 transition duration-500 ease-in-out transform xl:p-2 md:p-2 lg:p-2 hover:shadow-lg hover:scale-95"
            :alt="data.product.name"
            :src="data.product.image.sourceUrl"
          />
          <img
            v-else
            id="product-image"
            class="h-auto p-8 transition duration-500 ease-in-out transform xl:p-2 md:p-2 lg:p-2 hover:shadow-lg hover:scale-95"
            :alt="data.product.name"
            :src="config.placeholderImage"
          />
          <div class="ml-8">
            <p class="text-3xl font-bold text-left">
              {{ data.product.name }}
            </p>
            <div v-if="data.product.onSale" class="flex">
              <p class="pt-1 mt-4 text-3xl text-gray-900">
                <span v-if="data.productvariations">
                  {{ filteredVariantPrice(data.product.price) }}</span
                >
                <span v-else>{{ data.product.salePrice }}</span>
              </p>
              <p class="pt-1 pl-8 mt-4 text-2xl text-gray-900 line-through">
                <span v-if="data.productvariations">
                  {{ filteredVariantPrice(data.product.price, "right") }}</span
                >
                <span v-else>{{ data.product.regularPrice }}</span>
              </p>
            </div>
            <p v-else class="pt-1 mt-4 text-2xl text-gray-900">
              {{ data.product.price }}
            </p>
            <br />
            <p class="pt-1 mt-4 text-2xl text-gray-900">
              {{ stripHTML(data.product.description) }}
            </p>
            <p
              v-if="data.product.stockQuantity"
              class="pt-1 mt-4 text-2xl text-gray-900"
            >
              {{ data.product.stockQuantity }} in stock
            </p>
            <p
              v-if="data.product.variations"
              class="pt-1 mt-4 text-xl text-gray-900"
            >
              <span class="py-2">Varianter</span>
              <select
                id="variant"
                name="variant"
                class="block w-64 px-6 py-2 bg-white border border-gray-500 rounded-lg focus:outline-none focus:shadow-outline"
              >
                <option
                  v-for="(variation, index) in data.product.variations.nodes"
                  :key="variation.databaseId"
                  :value="variation.databaseId"
                  :selected="index === 0"
                >
                  {{ filteredVariantName(data.product.name, variation.name) }}
                  ({{ variation.stockQuantity }} in stock)
                </option>
              </select>
            </p>
            <div class="pt-1 mt-2">
              <CommonButton
                @common-button-click="addProductToCart(data.product)"
                :is-loading="isLoading"
              >
                ADD TO CART</CommonButton
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import GET_SINGLE_PRODUCT_QUERY from "@/apollo/queries/GET_SINGLE_PRODUCT_QUERY.gql";
import ADD_TO_CART_MUTATION from "@/apollo/mutations/ADD_TO_CART_MUTATION.gql";

import {
  stripHTML,
  filteredVariantPrice,
  filteredVariantName,
} from "@/utils/functions";

import { useCart } from "@/store/useCart";

const isLoading = useState("isLoading", () => false);

const config = useRuntimeConfig();

const cart = useCart();

const props = defineProps({
  id: { type: String, required: true },
  slug: { type: String, required: true },
});

const variables = { id: props.id, slug: props.slug };
const { data } = await useAsyncQuery(GET_SINGLE_PRODUCT_QUERY, variables);

const addProductToCart = async (product) => {
  const productId = product.databaseId ? product.databaseId : product;
  const productQueryInput = {
    productId,
  };

  isLoading.value = true;

  const addToCartvariables = { input: productQueryInput };

  cart.addToCart(product);

  const { mutate, onDone, onError } = useMutation(ADD_TO_CART_MUTATION, {
    addToCartvariables,
  });

  mutate(addToCartvariables);

  onDone(() => {
    isLoading.value = false;
  });

  onError(() => {
    isLoading.value = false;
  });
};
</script>

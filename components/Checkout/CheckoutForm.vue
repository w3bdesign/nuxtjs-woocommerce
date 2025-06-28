<template>
  <section class="text-gray-700 container p-4 py-2 mx-auto mt-8">
    <Form :validation-schema="BILLING_SCHEMA" @submit="handleSubmit">
      <div class="mx-auto lg:w-1/2 flex flex-wrap">
        <div
          v-for="field in BILLING_FIELDS"
          :key="field.inputId"
          class="w-1/2 p-2"
        >
          <label :for="field.inputId">{{ field.label }}</label>
          <Field v-slot="{ field, meta }" :name="field.inputId">
            <input
              v-bind="field"
              class="w-full px-4 py-2 mt-2 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-black"
              :class="[
                meta.valid
                  ? 'border-green-700 border-2'
                  : 'border-red-500 border-2',
              ]"
            />
          </Field>
          <ErrorMessage v-slot="{ message }" :name="field.inputId">
            <span class="text-lg text-red-500 font-bold">{{
              upperCaseFirstChar(message)
            }}</span>
          </ErrorMessage>
        </div>
        <div class="w-full flex justify-center mt-6">
          <CommonButton>SUBMIT ORDER</CommonButton>
        </div>
      </div>
    </Form>
  </section>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { uid } from "uid";
import { ref, onMounted } from "vue";
import { useCart } from "@/store/useCart";

import { BILLING_FIELDS, BILLING_SCHEMA } from "./constants/BILLING_FIELDS";

import CHECKOUT_MUTATION from "@/apollo/mutations/CHECKOUT_MUTATION.gql";

/**
 * Returns an input string with its first character capitalized.
 *
 * @param {string} input - The string to capitalize the first character of.
 * @return {string} The input string with the first character capitalized.
 */
const upperCaseFirstChar = (input) =>
  input.charAt(0).toUpperCase() + input.slice(1);

const paymentMethod = "cod";
const cart = useCart();
const orderData = ref(null);
const isLoading = ref(false);

// Clear WooCommerce session
const clearWooCommerceSession = () => {
  if (process.client) {
    localStorage.removeItem("woo-session");
    localStorage.removeItem("woocommerce-cart");
  }
};

// Set up mutation with variables
const { mutate, onDone, onError } = useMutation(CHECKOUT_MUTATION, {
  variables: computed(() => ({ input: orderData.value })),
});

onDone(async (result) => {
  const { data } = result;
  clearWooCommerceSession();
  isLoading.value = false;
  
  if (data?.checkout?.result === "success") {
    await cart.refetch();
    await navigateTo("/success");
  } else {
    alert("Error, order not placed. Please try again.");
    await cart.refetch();
  }
});

onError(async (error) => {
  console.error("Checkout error:", error);
  isLoading.value = false;
  
  if (error.message.includes("session")) {
    clearWooCommerceSession();
    alert("Your session has expired. Please refresh the page and try again.");
  } else {
    alert("An unexpected error occurred. Please try again.");
  }
  
  await cart.refetch();
});

// Ensure cart is loaded on mount
onMounted(async () => {
  await cart.refetch();
});

// Watch for orderData changes and trigger mutation
watch(orderData, (newOrderData) => {
  if (newOrderData) {
    isLoading.value = true;
    mutate();
    
    // Refetch after a delay
    setTimeout(() => {
      cart.refetch();
    }, 2000);
  }
}, { deep: true });

/**
 * Handles the submission of a checkout form with the provided user information.
 */
const handleSubmit = ({
  firstName,
  lastName,
  address1,
  address2,
  city,
  country,
  state,
  postcode,
  email,
  phone,
  company,
}) => {
  const billing = {
    firstName,
    lastName,
    address1,
    address2,
    city,
    country,
    state,
    postcode,
    email,
    phone,
    company,
  };

  const checkoutData = {
    clientMutationId: uid(),
    billing,
    shipping: billing,
    shipToDifferentAddress: false,
    paymentMethod,
    isPaid: false,
    transactionId: "hjkhjkhsdsdiui",
  };

  orderData.value = checkoutData;
};
</script>

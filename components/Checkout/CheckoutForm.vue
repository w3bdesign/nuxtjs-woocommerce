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
import { ref, onMounted, watch } from "vue";
import { useCart } from "@/store/useCart";

import { BILLING_FIELDS, BILLING_SCHEMA } from "./constants/BILLING_FIELDS";

import CHECKOUT_MUTATION from "@/apollo/mutations/CHECKOUT_MUTATION.gql";
import GET_CART_QUERY from "@/apollo/queries/GET_CART_QUERY.gql";

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
const hasSession = ref(false);

// Clear WooCommerce session
const clearWooCommerceSession = () => {
  if (process.client) {
    localStorage.removeItem("woo-session");
    localStorage.removeItem("woocommerce-cart");
  }
};

// Check if we have a valid session
const checkSession = () => {
  if (process.client) {
    const sessionData = localStorage.getItem("woo-session");
    if (sessionData) {
      try {
        const parsed = JSON.parse(sessionData);
        hasSession.value = !!(parsed && parsed.token);
      } catch (e) {
        hasSession.value = false;
      }
    } else {
      hasSession.value = false;
    }
  }
};

// Use query to establish session
const { result: cartResult, refetch: refetchCartQuery } = useQuery(
  GET_CART_QUERY,
  null,
  {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
  }
);

// Watch for cart result to update session status
watch(cartResult, (newResult) => {
  if (newResult && newResult.cart) {
    checkSession();
    // The cart store will automatically update via its own watcher
  }
});

// Ensure cart is loaded and session established on mount
onMounted(async () => {
  await refetchCartQuery();
  checkSession();
});

/**
 * Handles the submission of a checkout form with the provided user information.
 */
const handleSubmit = async ({
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

  try {
    const { mutate } = useMutation(CHECKOUT_MUTATION);
    
    const result = await mutate({
      input: checkoutData,
    });

    if (result?.data?.checkout?.result === "success") {
      clearWooCommerceSession();
      await cart.refetch();
      await navigateTo("/success");
    } else {
      alert("Error, order not placed. Please try again.");
      await cart.refetch();
    }
  } catch (error) {
    console.error("Checkout error:", error);
    
    if (error.message.includes("session")) {
      clearWooCommerceSession();
      alert("Your session has expired. Please refresh the page and try again.");
    } else {
      alert("An unexpected error occurred. Please try again.");
    }
    
    await cart.refetch();
  }
};
</script>

<template>
  <section class="text-gray-700 container p-4 py-2 mx-auto">
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
          <CheckoutButton />
        </div>
      </div>
    </Form>
  </section>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'

import { BILLING_FIELDS, BILLING_SCHEMA } from './constants/BILLING_FIELDS'

import { uid } from 'uid'

import CHECKOUT_MUTATION from '@/apollo/mutations/CHECKOUT_MUTATION.gql'

const upperCaseFirstChar = (input) =>
  input.charAt(0).toUpperCase() + input.slice(1)

const paymentMethod = 'cod'

const handleSubmit = (values) => {
  const billing = {
    firstName: values.firstName,
    lastName: values.lastName,
    address1: values.address1,
    address2: values.address2,
    city: values.city,
    country: values.country,
    state: values.state,
    postcode: values.postcode,
    email: values.email,
    phone: values.phone,
    company: values.company,
  }

  const checkoutData = {
    clientMutationId: uid(),
    billing,
    shipping: billing,
    shipToDifferentAddress: false,
    paymentMethod,
    isPaid: false,
    transactionId: 'hjkhjkhsdsdiui',
  }

  const variables = { input: checkoutData }

  const { mutate, onDone, onError } = useMutation(CHECKOUT_MUTATION, {
    variables,
  })

  mutate(checkoutData)

  onDone(() => alert('Order placed!'))

  onError(() => alert('Error, order not placed'))
}
</script>

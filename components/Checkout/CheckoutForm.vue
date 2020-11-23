<template>
  <div class="container mx-auto mt-4">
    <pre>{{ error }}</pre>
    <br />

    <FormulateForm
      v-model="formData"
      @validation="validation = $event"
      @submit="submitOrder"
    >
      <section class="text-gray-700">
        <div class="container p-4 py-2 mx-auto">
          <div class="mx-auto lg:w-1/2 md:w-2/3">
            <div class="flex flex-wrap -m-2">
              <div class="w-1/2 p-2">
                <FormulateInput
                  name="firstName"
                  class="text-input"
                  label="First name"
                  :validation="[['required'], ['min', 3]]"
                  type="text"
                />
              </div>
              <div class="w-1/2 p-2">
                <FormulateInput
                  name="lastName"
                  class="text-input"
                  label="Last name"
                  :validation="[['required'], ['min', 3]]"
                  type="text"
                />
              </div>
              <div class="w-1/2 p-2">
                <FormulateInput
                  name="address1"
                  class="text-input"
                  label="Address"
                  :validation="[['required'], ['min', 3]]"
                  type="text"
                />
              </div>
              <div class="w-1/2 p-2">
                <FormulateInput
                  name="postcode"
                  class="text-input"
                  label="Postal code"
                  :validation="[['required'], ['number']]"
                  type="text"
                />
              </div>
              <div class="w-1/2 p-2">
                <FormulateInput
                  name="city"
                  class="text-input"
                  label="City"
                  :validation="[['required'], ['min', 2]]"
                  type="text"
                />
              </div>
              <div class="w-1/2 p-2">
                <FormulateInput
                  name="email"
                  class="text-input"
                  label="Email"
                  :validation="[['required'], ['email']]"
                  type="text"
                />
              </div>
              <div class="w-1/2 p-2">
                <FormulateInput
                  name="phone"
                  class="text-input"
                  label="Phone"
                  :validation="[['required'], ['number']]"
                  type="text"
                />
              </div>
              <div class="w-1/2 p-2">
                <FormulateInput
                  name="paymentMethod"
                  class="invisible"
                  value="cod"
                  type="hidden"
                />
              </div>
            </div>
          </div>
        </div>
        <SubmitOrderButton :success="success" :loading="loading" />
      </section>
    </FormulateForm>
  </div>
</template>

<script>
import { uid } from 'uid'

import CHECKOUT_MUTATION from '@/apollo/mutations/CHECKOUT_MUTATION'

import { createCheckoutData } from '@/utils/functions'

export default {
  name: 'CheckoutForm',
  data() {
    return {
      loading: false,
      error: null,
      success: false,
      formData: {},
      validation: {},
    }
  },
  methods: {
    createCheckoutData,
    async submitOrder() {
      // const checkoutData = await createCheckoutData(this.formData)
      // console.log(checkoutData)
      this.loading = true
      const order = this.formData

      const checkoutData = {
        clientMutationId: uid(),
        billing: {
          firstName: order.firstName,
          lastName: order.lastName,
          address1: order.address1,
          address2: order.address2,
          city: order.city,
          country: order.country,
          state: order.state,
          postcode: order.postcode,
          email: order.email,
          phone: order.phone,
          company: order.company,
        },
        shipping: {
          firstName: order.firstName,
          lastName: order.lastName,
          address1: order.address1,
          address2: order.address2,
          city: order.city,
          country: order.country,
          state: order.state,
          postcode: order.postcode,
          email: order.email,
          phone: order.phone,
          company: order.company,
        },
        shipToDifferentAddress: false,
        paymentMethod: order.paymentMethod,
        isPaid: false,
        transactionId: 'hjkhjkhsdsdiui',
      }

      try {
        await this.$apollo
          .mutate({
            mutation: CHECKOUT_MUTATION,
            variables: { input: checkoutData },
          })
          .then(({ data }) => {
            this.loading = false
            if (data.checkout.result === 'success') {
              this.success = true
              this.$router.push('/success')
            }
          })
      } catch (error) {
        this.error = error
      }
    },
  },
}
</script>

<style scoped>
.text-input {
  @apply p-2 text-gray-800 placeholder-gray-800 border border-gray-400 rounded shadow-md;
}
</style>

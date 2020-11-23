<template>
  <div class="container mx-auto mt-4">
    <pre>{{ formData }}</pre>
    <br />
    <pre>{{ validation }}</pre>
    <br />
    <FormulateForm
      v-model="formData"
      @validation="validation = $event"
      @submit="showAlert"
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
        <SubmitOrderButton />
      </section>
    </FormulateForm>
  </div>
</template>

<script>
export default {
  name: 'CheckoutForm',
  data() {
    return {
      formData: {},
      validation: {},
    }
  },
  methods: {
    showAlert() {
      alert('You submitted the form.')
    },
  },
}
</script>

<style scoped>
.text-input {
  @apply p-2 text-gray-800 placeholder-gray-800 border border-gray-400 rounded shadow-md;
}
</style>

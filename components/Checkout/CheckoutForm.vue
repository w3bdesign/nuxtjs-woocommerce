<template>
  <div class="container mx-auto">
    <FormulateForm v-model="formData">
      <section class="text-gray-700">
        <div class="container p-4 py-2 mx-auto">
          <div class="mx-auto lg:w-1/2 md:w-2/3">
            <div class="flex flex-wrap -m-2">
              <div class="w-1/2 p-2">
                <FormulateInput
                  name="firstName"
                  class="p-2 text-gray-800 placeholder-gray-800 border border-gray-400 rounded shadow-md"
                  label="First name"
                  :validation="[['required'], ['min', 3]]"
                  type="text"
                />
              </div>
              <div class="w-1/2 p-2">
                <FormulateInput
                  name="lastName"
                  class="p-2 text-gray-800 placeholder-gray-800 border border-gray-400 rounded shadow-md"
                  label="Last name"
                  :validation="[['required'], ['min', 3]]"
                  type="text"
                />
              </div>
              <div class="w-1/2 p-2">
                <FormulateInput
                  name="address1"
                  class="p-2 text-gray-800 placeholder-gray-800 border border-gray-400 rounded shadow-md"
                  label="Address"
                  type="text"
                />
              </div>
              <div class="w-1/2 p-2">
                <FormulateInput
                  name="postcode"
                  class="p-2 text-gray-800 placeholder-gray-800 border border-gray-400 rounded shadow-md"
                  label="Postal code"
                  type="text"
                />
              </div>
              <div class="w-1/2 p-2">
                <FormulateInput
                  name="city"
                  class="p-2 text-gray-800 placeholder-gray-800 border border-gray-400 rounded shadow-md"
                  label="City"
                  type="text"
                />
              </div>
              <div class="w-1/2 p-2">
                <FormulateInput
                  name="email"
                  class="p-2 text-gray-800 placeholder-gray-800 border border-gray-400 rounded shadow-md"
                  label="Email"
                  type="text"
                />
              </div>
              <div class="w-1/2 p-2">
                <FormulateInput
                  name="phone"
                  class="p-2 text-gray-800 placeholder-gray-800 border border-gray-400 rounded shadow-md"
                  label="Phone"
                  type="text"
                />
              </div>
              <div class="w-1/2 p-2">
                <FormulateInput
                  name="paymentMethod"
                  class="p-2 text-gray-800 placeholder-gray-800 border border-gray-400 rounded shadow-md"
                  value="cod"
                  type="hidden"
                />
              </div>
            </div>
          </div>
        </div>
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
    }
  },
}
</script>

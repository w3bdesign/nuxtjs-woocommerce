<template>
  <div class="container mx-auto">
    <FormulateForm v-model="formData">
      <section className="text-gray-700">
        <div className="container p-4 py-2 mx-auto">
          <div className="mx-auto lg:w-1/2 md:w-2/3">
            <div className="w-1/2 p-2">
              <FormulateInput
                name="firstName"
                class="p-2 text-gray-800 placeholder-gray-800 border border-gray-400 rounded shadow-md"
                label="First name"
                type="text"
              />
            </div>
            <div className="w-1/2 p-2">
              <FormulateInput
                name="lastName"
                class="p-2 text-gray-800 placeholder-gray-800 border border-gray-400 rounded shadow-md"
                label="Last name"
                type="text"
              />
            </div>
            <div className="w-1/2 p-2">
              <FormulateInput
                name="address1"
                class="p-2 text-gray-800 placeholder-gray-800 border border-gray-400 rounded shadow-md"
                label="Address"
                type="text"
              />
            </div>
            <div className="w-1/2 p-2">
              <FormulateInput
                name="postcode"
                class="p-2 text-gray-800 placeholder-gray-800 border border-gray-400 rounded shadow-md"
                label="Postal code"
                type="text"
              />
            </div>
            <div className="w-1/2 p-2">
              <FormulateInput
                name="city"
                class="p-2 text-gray-800 placeholder-gray-800 border border-gray-400 rounded shadow-md"
                label="City"
                type="text"
              />
            </div>
            <div className="w-1/2 p-2">
              <FormulateInput
                name="email"
                class="p-2 text-gray-800 placeholder-gray-800 border border-gray-400 rounded shadow-md"
                label="Email"
                type="text"
              />
            </div>
            <div className="w-1/2 p-2">
              <FormulateInput
                name="phone"
                class="p-2 text-gray-800 placeholder-gray-800 border border-gray-400 rounded shadow-md"
                label="Phone"
                type="text"
              />
            </div>
            <div className="w-1/2 p-2">
              <FormulateInput
                name="paymentMethod"
                class="p-2 text-gray-800 placeholder-gray-800 border border-gray-400 rounded shadow-md"
                value="cod"
                type="hidden"
              />
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

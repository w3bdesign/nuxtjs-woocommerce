<template>
  <div class="container mx-auto form-wrapper">
    <FormulateForm v-model="formData">
      <FormulateInput
        class="p-2 text-gray-800 placeholder-gray-800 border border-gray-400 rounded shadow-md"
        label="Who is going to attend?"
        type="text"
      />
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

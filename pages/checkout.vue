<template>
  <div>
    <ShowCartContents />
    <CheckoutForm />
  </div>
</template>

<script>
export default {
  name: 'Checkout',
  layout: 'Layout',
  transition: {
    name: 'home',
    mode: 'out-in',
  },
}
</script>

<template>
  <div>
    <ShowCartContents /> <br />
    <FormulateInput type="text" />
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

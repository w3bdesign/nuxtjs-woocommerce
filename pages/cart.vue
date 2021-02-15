<template>
  <div>
    <CartShowCartContents display-remove />
  </div>
</template>

<script>
export default {
  name: 'Cart',
  layout: 'Layout',
  transition: {
    name: 'home',
    mode: 'out-in',
  },
}
</script>

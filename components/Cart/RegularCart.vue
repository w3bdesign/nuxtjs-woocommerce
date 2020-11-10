<template>
  <div>
    <table class="hidden table-auto md:block lg:block xl:block">
      <thead>
        <tr>
          <th class="px-4 py-2" scope="col" />
          <th class="px-4 py-2" scope="col" />
          <th class="px-4 py-2" scope="col">Product</th>
          <th class="px-4 py-2" scope="col">Price</th>
          <th class="px-4 py-2" scope="col">Quantity</th>
          <th class="px-4 py-2" scope="col">Total</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    cart: { type: Array, required: true },
  },
}
</script>

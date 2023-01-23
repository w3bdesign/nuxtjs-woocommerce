<template>
  <main>
    <h1>Page not found</h1>
    <ul role="list">
      There was an error locating the page
    </ul>
  </main>
</template>

<script setup>
import { definePageMeta } from 'vue'
definePageMeta({
  layout: 'base',
})
</script>

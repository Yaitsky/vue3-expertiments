<script setup>
import useNumbers from '@/composables/numbers'

const { numbers, addNumber } = useNumbers()
</script>

<template>
  <div>
    <h1>
      Hello Vue World!
    </h1>
    <div>{{ numbers }}</div>
    <button @click="addNumber(10)">
      Add Number
    </button>
  </div>
</template>
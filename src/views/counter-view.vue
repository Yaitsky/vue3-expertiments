<script setup>
import { ref, computed } from 'vue'
import useNumbers from '@/composables/numbers'

// counter
const count = ref(0)
const computedCount = computed({
  get() {
    return count.value * 2
  },
  set(value) {
    count.value = count.value + value
  }
})

const increment = () => count.value++

// numbers
const { numbers, addNumber } = useNumbers()
</script>

<template>
  <div>
    <h1>Count is {{ count }}</h1>
    <h1>Multiple count is {{ computedCount }}</h1>
    <button @click="increment">Increment</button>

    <button @click="computedCount = 10">Increment Multiple Count</button>

    <div>
      {{ numbers }}
    </div>
    <button @click="addNumber(11)">
      Add Number
    </button>
  </div>
</template>

<style scoped></style>

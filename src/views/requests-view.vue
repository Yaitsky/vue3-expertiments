<script setup>
  import axios from 'axios'
  import { ref, computed, onMounted } from 'vue'

  // quotes
  const quotes = ref([])
  const quotesLoading = ref(false)
  const quotesError = ref(false)
  const quotesFilter = ref('')

  const filteredQuotes = computed(() => {
    return quotes.value.filter(q => q.quote.toLowerCase().includes(quotesFilter.value.toLowerCase()))
  })

  const loadQuoutes = async () => {
    try {
      quotesError.value = false
      quotesLoading.value = true

      const { data } = await axios.get('https://api.breakingbadquotes.xyz/v1/quotes/30')

      quotes.value = data
    } catch (error) {
      console.log(error)
      quotesError.value = true
    } finally {
      quotesLoading.value = false
    }
  }

  onMounted(() => {
    loadQuoutes()
  })

  // users
  // users logic (state, methods etc)
</script>

<template>
  <div>
    <h1>Hello Http Requests!</h1>

    <button @click="loadQuoutes">
      Refresh
    </button>

    <div v-if="!quotesLoading && !quotesError">
      <input type="text" v-model.trim="quotesFilter" />

      <p v-for="item in filteredQuotes" :key="item.quote">
        {{ item.quote }}
      </p>
    </div>
    <h1 v-else-if="quotesError">
      Request Error. Try again!
    </h1>
    <h1 v-else>
      Quotes loading...
    </h1>
  </div>
</template>

<style scoped>

</style>
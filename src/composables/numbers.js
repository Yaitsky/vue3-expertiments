import { ref } from 'vue'

export default () => {
  const numbers = ref([1, 2, 3, 4, 5, 6, 7])

  const addNumber = number => {
    numbers.value.push(number)
  }

  return {
    numbers,
    addNumber
  }
}
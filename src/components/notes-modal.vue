<script setup>
import { ref } from 'vue'
import { getRandomColor } from '@/utils'

defineProps(['show'])

const emit = defineEmits(['add', 'close'])

const errorMessage = ref(false)
const newNoteText = ref('')

const addNote = () => {
  if (newNoteText.value.length < 5) {
    errorMessage.value = true
    return
  }

  emit('add', {
    id: Date.now(),
    text: newNoteText.value,
    color: getRandomColor(),
    date: new Date()
  })

  newNoteText.value = ''
  errorMessage.value = false
  emit('close')
}
</script>

<template>
  <div v-if="show" class="overlay">
    <div class="modal">
      <input v-model="newNoteText" @input="errorMessage = false" />
      <div v-if="errorMessage" class="error-message">
        Длина должна быть более 5 символов
      </div>
      <button @click="addNote">
        Добавить
      </button>
      <button @click="$emit('close')">
        Закрыть окно
      </button>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.modal {
  background: #fff;
  padding: 32px;
}

.error-message {
  color: red;
}
</style>
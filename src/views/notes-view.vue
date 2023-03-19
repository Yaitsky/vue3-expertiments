<script setup>
import { ref, computed } from 'vue'
import NotesItem from '@/components/notes-item.vue'
import NotesModal from '@/components/notes-modal.vue';

// modal
const showModal = ref(false)

// notes
const notes = ref([])
const filteredNotes = computed(() => {
  return notes.value.filter(n => n.text.toLowerCase().includes(filterText.value.toLowerCase()))
})
const filterText = ref('')

const addNote = (note) => {
  notes.value.push(note)
}

const removeNote = id => {
  notes.value = notes.value.filter(n => n.id !== id)
}
</script>

<template>
  <div>
    <header>
      <h1>
        Notes App
      </h1>
      <button @click="showModal = true">
        Добавить заметку
      </button>
    </header>

    <div class="filter">
      <input type="text" v-model="filterText">
    </div>

    <ul class="card-list">
      <transition-group name="cards">
        <notes-item v-for="note in filteredNotes" :key="note.id" :note="note" @remove="removeNote" />
      </transition-group>
    </ul>

    <notes-modal @add="addNote" @close="showModal = false" :show="showModal" />
  </div>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
}

.filter {
  margin-bottom: 32px;

  input {
    width: 100%;
  }
}

.card-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.cards {

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateY(-16px);
  }

  &-enter-active,
  &-leave-active,
  &-move {
    transition: all 0.2s ease-in-out;
  }

  &-leave-active {
    position: absolute;
  }
}
</style>

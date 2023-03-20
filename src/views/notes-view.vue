<script setup>
import { ref } from 'vue'
import { useNotesStore } from '@/stores/notes'
import NotesItem from '@/components/notes-item.vue'
import NotesModal from '@/components/notes-modal.vue';

// modal
const showModal = ref(false)

// notes
const store = useNotesStore()
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
      <input type="text" v-model="store.filterText">
    </div>

    <ul class="card-list">
      <transition-group name="cards">
        <notes-item v-for="note in store.filteredNotes" :key="note.id" :note="note" @remove="store.removeNote" />
      </transition-group>
    </ul>

    <notes-modal @add="store.addNote" @close="showModal = false" :show="showModal" />
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

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([])
  const filterText = ref('')

  const filteredNotes = computed(() => {
    return notes.value.filter((n) => n.text.toLowerCase().includes(filterText.value.toLowerCase()))
  })

  const addNote = (note) => {
    notes.value.push(note)
  }

  const removeNote = (id) => {
    notes.value = notes.value.filter((n) => n.id !== id)
  }

  return { notes, filteredNotes, filterText, addNote, removeNote }
})

// export const useNotesStore = defineStore('notes', {
//   state: () => ({ notes: [], filterText: '' }),
//   getters: {
//     filteredNotes: state => state.notes.filter((n) => n.text.toLowerCase().includes(state.filterText.toLowerCase()))
//   },
//   actions: {
//     addNote(note) {
//       this.notes.push(note)
//     },
//     removeNote(id) {
//       this.notes = this.notes.filter(n => n.id !== id)
//     }
//   }
// })

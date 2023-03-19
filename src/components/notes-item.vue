<script setup>
defineProps({
  note: {
    type: Object
  }
})
</script>

<template>
  <li class="card-item" :style="{ backgroundColor: note.color }">
    <div class="card-item__content">
      <span>{{ note.text }}</span>
      <span>{{ note.date.toLocaleDateString() }}</span>
    </div>
    <button @click="$emit('remove', note.id)">Удалить</button>
  </li>
</template>

<style lang="scss" scoped>
.card-item {
  padding: 32px;
  color: #131313;
  width: 100%;
  box-sizing: border-box;
  max-width: 420px;
  display: flex;
  justify-content: space-between;

  &__content {
    display: flex;
    gap: 8px;
  }
}
</style>
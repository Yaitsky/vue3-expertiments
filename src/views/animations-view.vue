<script setup>
import { ref } from 'vue'
import gsap from 'gsap'

const show = ref(false)
const array = ref(['Apple', 'Pineapple', 'Orange'])

const beforeEnter = el => {
  el.style.opacity = 0
  el.style.transform = 'translateY(-48px)'
}

const afterEnter = el => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.3,
    delay: el.dataset.index * 0.3
  })
}
</script>

<template>
  <div>
    <button @click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <h1 v-if="show">
        Hello Animations!
      </h1>
    </transition>

    <div class="group-animation">
      <transition-group @before-enter="beforeEnter" @after-enter="afterEnter" appear>
        <button v-for="(item, i) in array" :key="item" :data-index="i">
          {{ item }}
        </button>
      </transition-group>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.group-animation {
  display: flex;
  gap: 32px;
  margin-top: 32px;

  button {
    padding: 16px 32px;
  }
}
</style>
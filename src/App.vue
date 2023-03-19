<script setup>
const links = [
  { label: 'Home', path: '/' },
  { label: 'Counter', path: '/counter' },
  { label: 'Notes', path: '/notes' },
  { label: 'Animations', path: '/animations' },
  { label: 'Requests', path: '/requests' }
]
</script>

<template>
  <nav>
    <router-link v-for="link in links" :key="link.label" :to="link.path">
      {{ link.label }}
    </router-link>
  </nav>

  <router-view v-slot="{ Component }">
    <transition name="route">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss" scoped>
nav {
  padding: 16px;
  display: flex;
  gap: 16px;
}

a {
  color: #eee;
  text-decoration: none;
}

a.router-link-active {
  color: #efa;
}

.route {
  &-enter-from {
    transform: translateX(64px);
    opacity: 0;
  }

  &-enter-active {
    transition: all 0.25s ease-in-out;
  }
}
</style>

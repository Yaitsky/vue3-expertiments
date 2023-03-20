import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home-view.vue')
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('@/views/counter-view.vue')
    },
    {
      path: '/notes',
      name: 'notes',
      component: () => import('@/views/notes-view.vue')
    },
    {
      path: '/animations',
      name: 'animations',
      component: () => import('@/views/animations-view.vue')
    },
    {
      path: '/requests',
      name: 'requests',
      component: () => import('@/views/requests-view.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/views/404-view.vue')
    },
  ]
})

export default router

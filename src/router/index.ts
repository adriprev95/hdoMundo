import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tailslibrary',
      name: 'tailslibrary',
      component: () => import('@/views/TailLibraryView.vue')
    },
    {
      path: '/tail/:id',
      name: 'tail',
      component: () => import('@/views/TailView.vue')
    }
  ]
})

export default router

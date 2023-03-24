import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/clients',
      name: 'clients',
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ClientListView.vue')
    },
    {
      path: '/clients/:id',
      name: 'clients-detail',
      component: () => import('../views/ClientDetailView.vue')
    },
    {
      path: '/documents',
      name: 'documents',
      component: () => import('../views/DocumentView.vue')
    }
  ]
})

export default router

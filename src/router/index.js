import { createRouter, createWebHistory } from 'vue-router'
import start from '../views/start.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: start
    },
    {
      path: '/edit',
      name: 'edit',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/edit.vue')
    },
    {
      path: '/result',
      name: 'result',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/result.vue')
    },
    {
      path: '/changeEndpoint',
      name: 'changeEndpoint',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/changeEndpoint.vue')
    }
  ]
})

export default router

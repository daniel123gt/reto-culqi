import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/Login.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Login,
      name: 'Login'
    },
    {
      path: '/home',
      component: () => import('./views/Home.vue'),
      name: 'Home',
      meta: { requiresAuth: true },
    },
  ],
})

import { createRouter, createWebHistory } from 'vue-router'
import routes from './module/basicRoutes'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

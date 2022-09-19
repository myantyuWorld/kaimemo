import { createRouter, createWebHistory } from 'vue-router'
import RouteGoodsList from '@/route/RouteGoodsList.vue'
import RouteTotalAMount from '@/route/RouteTotalAMount.vue'

const routes = [
  {
    path: '/',
    name: 'RouteGoodsList',
    component: RouteGoodsList
  },
  {
    path: '/second',
    name: 'RouteTotalAMount',
    component: RouteTotalAMount
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
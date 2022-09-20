import { createRouter, createWebHistory } from 'vue-router'
import RouteGoodsList from '@/route/RouteGoodsList.vue'
import RouteTotalAMount from '@/route/RouteTotalAMount.vue'
import RouteLogOn from '@/route/RouteLogOn.vue'

const routes = [
  {
    path: '/',
    name: 'RouteGoodsList',
    component: RouteGoodsList
  },
  {
    path: '/total_ammount',
    name: 'RouteTotalAMount',
    component: RouteTotalAMount
  },
  {
    path: '/logon',
    name: 'LogOn',
    component: RouteLogOn
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import Cards from '../views/Cards.vue'

const routes = [
  {
    path: '/',
    name: 'Cards',
    component: Cards
  },
  {
    path: '/company',
    name: 'Company',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Company.vue')
  },
  {
    path: '/covid',
    name: 'Covid',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Covid.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

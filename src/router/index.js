import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'input',
    component: () => import(/* webpackChunkName: "about" */ '../views/Input.vue')
  },
  {
    path: '/output',
    name: 'output',
    component: () => import(/* webpackChunkName: "about" */ '../views/Output.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

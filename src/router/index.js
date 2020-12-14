import Vue from 'vue'
import VueRouter from 'vue-router'
import pistarv from '../views/Pistarview.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'pistarv',
    component: pistarv
  },
  {
    path: '/Caview',
    name: 'cav',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Caview.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import pistarv from '../views/Pistarview.vue'
import projectsv from '../views/Projects.vue'
import projectv from '../views/Project.vue'
import login  from '../views/Login.vue'
import register from '../views/Register.vue'
import caview from '../views/Caview.vue'
//
import test from '../views/ts.vue'
// 
Vue.use(VueRouter)

const routes = [
  {
    path: '/pistar',
    name: 'pistarv',
    component: pistarv
  },
  {
    path: '/caview',
    name: 'caview',
    component: caview
  },
  {
    path: '/projects',
    name: 'projects',
    component: projectsv
  },
  {
    path: '/project',
    name: 'project',
    component: projectv
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register

  }
]

const router = new VueRouter({
  routes
})

export default router

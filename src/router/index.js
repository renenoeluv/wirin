import Vue from 'vue'
import VueRouter from 'vue-router'
import pistarv from '../views/Pistarview.vue'
import projectsv from '../views/Projects.vue'
import projectv from '../views/Project.vue'
import login  from '../views/Login.vue'
import register from '../views/Registerview.vue'
import caview from '../views/Caview.vue'
//
import test from '../views/ts.vue'
// 
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/pistar',
    name: 'pistarv',
    component: pistarv,
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/caview',
    name: 'caview',
    component: caview,
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: projectsv,
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/project',
    name: 'project',
    component: projectv,
    meta: { 
      requiresAuth: true
    }
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
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['user/isLoggedIn']) {//obtengo compruebo estado de getters isloggedin
      next()
      return
    }
    next('/') 
  } else {
    next() 
  }
})
export default router

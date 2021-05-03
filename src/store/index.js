import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import projectsModule from './modules/projects'
import  usermodules from './modules/user'

export default new Vuex.Store({
  state:{

  },
  modules:{
   projects: projectsModule,
   user:usermodules
 }
})

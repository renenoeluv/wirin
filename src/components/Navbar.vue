<template>
<b-navbar toggleable="md" type="dark"  variant="dark" style="z-index:0">
     <b-col align-self="center" md="0">
      <div v-if="home">

        <b-navbar variant="faded" type="light">
        <b-navbar-brand to="/projects">
          <b-icon icon="house-door" scale="2.4" variant="primary" title="Projects Dashboard"></b-icon>
        </b-navbar-brand>
        </b-navbar>

      </div><div v-else>
        <b-navbar variant="faded" type="light">
        <b-navbar-brand to="/project">
           <b-icon icon="house-door" scale="2" variant="primary"></b-icon>
        </b-navbar-brand>
        </b-navbar>
      </div>
     </b-col>
    
     <b-col align-self="end" md="2">   
      <div v-if="create">
          
            <b-button variant="outline-info" class="mb-2" v-b-modal="'modalC'" @click="$emit('CreateProject')">
            
              <b-icon icon="plus-square" aria-hidden="true"  scale="1" ></b-icon> Create Project
              
            </b-button>
            
      </div>
     </b-col>
     <b-col align-self="center" md="3" offset-md="2">
      <b-navbar-brand id="welcome">Welcome {{user}}</b-navbar-brand>
     </b-col>
    
      <b-col align-self="end" offset-lg="3">
      <!-- Right aligned nav items -->
      <b-navbar-nav id="b" class="ml-auto">
        <b-nav-item>About</b-nav-item> 
        <b-button variant="outline-danger" class="mb-2" @click="logout">
          <b-icon icon="power" aria-hidden="true" ></b-icon> Logout
        </b-button>
        
      </b-navbar-nav>
      </b-col>
    </b-navbar>
</template>
<script>
import store from '../store'
export default {
    data(){
      return{
        user:{}
      }
    },
    props: {
      create:Boolean,
      home:{
        type:Boolean,
        default:true
      }
  },mounted(){
     this.user=localStorage.getItem("idUser")
  },
  methods:{
    logout: function () {
        store.dispatch('user/logout')
        .then(() => {
          this.$router.push('/')
        })
      }
  }
      
    
}
</script>
<style scoped>

#create{
  z-index: 1;
  padding-left: 0%;
}

</style>
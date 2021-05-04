<template>
  <div id="ts">
   
    <navbar 

      :create="true"
      @openProject=tes
    ></navbar>
    <b-alert show variant="success">My Projects</b-alert>
    
    <b-container fluid=xl>
      <div id="test2">
        <project-list></project-list>
      </div>
    </b-container>
    <modalt></modalt>
  </div>
  
</template>

<script>
import modalt from '../components/modals/modalC'
import ProjectList from '../components/ProjectList.vue';
import Navbar from '../components/Navbar.vue';
export default {
  name:'Projects',
  components:{
    modalt,
    ProjectList,
    Navbar,
  },
  methods:{
    
  }
  
};
</script>

<style scoped>
.b-navbar{
  position: absolute;
  z-index: 0;
}

#test2{
  position: relative;
  
  z-index: 0;
}
</style>
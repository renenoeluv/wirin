<template>
  <div id="ts">
   
    <navbar 
      :create="true"
    ></navbar>
    <b-container fluid="sm">
    <sidebar/>
    </b-container>
    <b-container fluid="xl">
      <div id="test2">
        <project-list></project-list>
      </div>
    </b-container>
  </div>
  
</template>

<script>
import sidebar from "../components/sidebar.vue"
import ProjectList from '../components/ProjectList.vue';
import Navbar from '../components/Navbar.vue';
export default {
  name:'Projects',
  components:{
    sidebar,
    ProjectList,
    Navbar
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
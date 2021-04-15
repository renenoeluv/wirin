<template>
  <div id="app">
    <h1>project</h1>
    <project-list></project-list>
    <router-view/>
    <div id="nav">
      <router-link to="/pistar">Pistar</router-link> |
      <router-link to="/Caview">CA</router-link>|
      <router-link to="/">Project</router-link>
      <router-link to="/test"> test</router-link>
    </div>
    
    <router-view/>
    
  </div>
</template>
<script>
import ProjectList from '../components/ProjectList.vue';

export default {
  components: { ProjectList },
  name: "test",
  
};
</script>
    

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 0 px
</style>

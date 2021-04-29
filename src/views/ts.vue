<template>
  <div id="app">
    <h1>project</h1>
    <router-view/>
    <div id="nav">
      <router-link to="/pistar">Pistar</router-link> |
      <router-link to="/Caview">CA</router-link>|
      <router-link to="/">Project</router-link>
      <router-link to="/test"> test</router-link>
    </div>
    <button @click="test">sa</button>
    <modalN></modalN>
    <router-view/>
    
  </div>
</template>
<script>
import modalN from '../components/modals/modalN'

export default {
  components: {modalN },
  name: "test",
  methods:{
    test(){
      this.$root.$refs.modalN.showMsgBoxOne();
    }
  }
  
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

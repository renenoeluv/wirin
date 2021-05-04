<template>
  <div>
    <navbar
      :home="false"
    ></navbar>
    <div id="tt"></div>
      <pistar></pistar>
    
    <buttonbar
      :transform="true"
      :verify="true"
      :autosave="false"
    ></buttonbar>
    
  </div>
</template>

<script>
import Buttonbar from '../components/Buttonbar.vue'
import Navbar from '../components/Navbar.vue'
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import pistar from '@/comp<onents/Pistar.vue'
import Pistar from '../components/Pistar.vue'
export default {
  name: 'Home',
  components: {
    Pistar,
    Navbar,
    Buttonbar,
    
  }
}
</script>
<style scoped>
</style>
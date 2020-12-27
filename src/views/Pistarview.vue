<template>
  <div>
    <navbar
      :home="false"
    ></navbar>
    <pistar></pistar>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import pistar from '@/comp<onents/Pistar.vue'
import Pistar from '../components/Pistar.vue'
export default {
  name: 'Home',
  components: {
    Pistar,
    Navbar
  }
}
</script>

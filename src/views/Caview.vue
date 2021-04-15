<template>
  <div >
     <navbar
      :home="false"
    ></navbar>
    <ca></ca>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import pistar from '@/comp<onents/Pistar.vue'
import ca from '../components/CA.vue'
import navbar from '../components/Navbar'
export default {
  name: 'CA',
  components: {
    ca,
    navbar
  }
}
</script>

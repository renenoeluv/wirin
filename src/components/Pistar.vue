<template>
  <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
    <mensaje child="http://192.168.0.223:8082/"></mensaje>
    <iframe
      class="embed-responsive-item"
      id="piStar"
      src="http://192.168.0.223:8082/"
      width="1340"
      height="600"
      allowfullscreen
    ></iframe>
    <div>
  </div>
  </div>
  
</template>


<script>
import Mensaje from './mensaje.vue'
export default {
    components:{
        Mensaje
    }
    
}
</script>
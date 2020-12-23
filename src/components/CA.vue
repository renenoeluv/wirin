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
<style scoped>
 .container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 47.5%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>

<script>
import Mensaje from './mensaje.vue'
export default {
    components:{
        Mensaje
    }
    
}
</script>
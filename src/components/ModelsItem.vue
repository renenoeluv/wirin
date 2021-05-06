<template>
<div>
  <b-card-group deck>
    <b-card title="Goal Modeling with i*" img-src="http://localhost:8080/piStar.png" img-alt="Image" img-top>
      <b-card-text>
         Use the i* language for early requirements, process and organizational modelling
      </b-card-text>
      <b-button id="boton" block to="/PiStar" variant="primary">Open</b-button>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card title="Business Process Modeling with Communication Analysis" img-src="http://localhost:8080/piStar.png" img-alt="Image" img-top>
      <b-card-text>
        Use the Communication Analysis method for communication-oriented business process modelling.
      </b-card-text>
      
      <b-button  id="boton" block to="/caview" variant="primary">Open</b-button>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card title="System Modeling with OO-Method" img-src="http://localhost:8080/piStar.png" img-alt="Image" img-top>
      <b-card-text>
        Use the OO-Method for modelling software systems using the object-oriented paradigm.
      </b-card-text>
      
      <b-button id="boton" block disabled  to="#" variant="secondary">Open</b-button>
    
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
  </b-card-group>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#boton{
  /* position: absolute;
  bottom: 11%;
  left: 0%;
  margin-top: 50px;
   */
  /* display:inline-block;
  vertical-align: bottom; */
   margin-top: auto;
}
.card-body {
  display: flex;
  flex-direction: column;
}

</style>
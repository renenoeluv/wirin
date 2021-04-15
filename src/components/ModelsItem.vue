<template>
    <div>
  
  
  <b-card-group columns>
    <b-card
    title="Card Title"
    tag="article"
    style="max-width: 30rem;"
    class="mb-4"
    
    
  >
  <img class="mb-4" style="max-width: 20rem" src="../assets/piStar.png">
    <b-card-text>
      Use the i* language for early requirements, process and organizational modelling
    </b-card-text>

    <b-button to="/PiStar" variant="primary">Open</b-button>
  </b-card>
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 30rem;"
    class="mb-2"
  >
    <b-card-text>
      Use the Communication Analysis method for communication-oriented business process modelling.
    </b-card-text>

    <b-button to="/caview" variant="primary">Open</b-button>
  </b-card>
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 30rem;"
    class="mb-2"
  >
    <b-card-text>
      Use the OO-Method for modelling software systems using the object-oriented paradigm.
    </b-card-text>

    <b-button disabled  to="#" variant="secondary">Open</b-button>
  </b-card>
  </b-card-group>

</div>
</template>
<script>
export default {
    
}
</script>
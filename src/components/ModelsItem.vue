<template>
<div>
  <b-card-group deck>
    <b-card title="Goal Modeling with i*" :img-src="isIstar" img-alt="Image" img-top>
      <b-card-text>
         Use the i* language for early requirements, process and organizational modelling
      </b-card-text>
      <b-button id="boton" block to="/PiStar" variant="primary">Open</b-button>
      
    </b-card>

    <b-card title="Business Process Modeling with Communication Analysis" :img-src="isAc" img-alt="Image" img-top>
      <b-card-text>
        Use the Communication Analysis method for communication-oriented business process modelling.
      </b-card-text>
      
      <b-button  id="boton" block to="/caview" variant="primary">Open</b-button>
      
    </b-card>

    <b-card title="System Modeling with OO-Method" :img-src="isMoo" img-alt="Image" img-top>
      <b-card-text>
        Use the OO-Method for modelling software systems using the object-oriented paradigm.
      </b-card-text>
      
      <b-button id="boton" block disabled  to="#" variant="secondary">Open</b-button>
    
    </b-card>
  </b-card-group>
</div>
</template>
<script>
import {mapActions} from 'vuex'

import {dataP} from '../helper/dataProject'
export default {
  computed:{
    isIstar(){
      if(this.istar===true){
        return process.env.VUE_APP_IMAGE_MODEL
      }else{
        return process.env.VUE_APP_IMAGE_VOID
      }
    },
    isAc(){
      if(this.ac===true){
        return process.env.VUE_APP_IMAGE_MODEL
      }else{
        return process.env.VUE_APP_IMAGE_VOID
      }
    },
    isMoo(){
      if(this.moo===true){
        return process.env.VUE_APP_IMAGE_MODEL
      }else{
        return process.env.VUE_APP_IMAGE_VOID
      }
      
    }
  },
  async mounted(){
    console.log(process.env.VUE_APP_IMAGE_VOID)
    await this.fetchProjects(localStorage.getItem("idUser"))//
       
    this.dataProject()
  },
  data(){
    return{
      istar:{
      type:Boolean
    },
    ac:{
      type:Boolean
    },
    moo:{
      type:Boolean
    }}
    
  },
  methods:{
    ...mapActions('projects',['fetchProjects']),
        
    async dataProject(){
             let fa = await dataP(localStorage.getItem('idProject'))
             this.istar=fa.estadoIstar
             this.ac=fa.estadoAc
             this.moo=fa.estadoMoo
             console.log("aaa")
             console.log(this.istar)
        }
  }
    
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
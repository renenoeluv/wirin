<template>
<b-navbar toggleable="md" type="dark" variant="dark" fixed="bottom">
     
     
    <div v-if="transform">
       
        <b-button variant="outline-info" class="mb-2" v-b-toggle @click="message('1')"  >
            
              <b-icon icon="plus-square" aria-hidden="true"  scale="1" ></b-icon> Transform and save
              
            </b-button>
    </div>
    <div v-if="verify">
        <b-button variant="outline-info"  class="mb-2" v-b-toggle @click="message('2')" >
            
              <b-icon icon="plus-square" aria-hidden="true"  scale="1" ></b-icon> verify
              
            </b-button>
    </div>
    
    
    <b-button variant="outline-info" class="mb-2" v-b-toggle @click="message('3')"  >
            
              <b-icon icon="plus-square" aria-hidden="true"  scale="1" ></b-icon> Save
              
            </b-button>
    <div v-if="autosave">
        <b-navbar-brand v-b-toggle @click="message('4')">Auto Save</b-navbar-brand>

    </div>
    <div v-if="trazability">
        <b-button variant="outline-info" class="mb-2" v-b-toggle @click="trazabilityN"  >
            
              <b-icon icon="plus-square" aria-hidden="true"  scale="1" ></b-icon> trazability
              
            </b-button>
    </div>

      
    

    <b-collapse id="nav-collapse" is-nav>

    </b-collapse>    
    </b-navbar>
</template>
<script>
export default {
    
    props: {
      transform:Boolean,
      verify:Boolean,
      autosave:Boolean,
      trazability:{
          type:Boolean,
          default:false
      }
},
methods:{
    message(message){
        console.log(message)
        this.$root.$refs.mensaje.envio_data(message);//llamo a funcion para enviar mensajes de componente mensaje
    },
    async trazabilityN(){
        let t =await JSON.stringify(localStorage.getItem("trazability"))
        this.$root.$refs.modalN.showMsgBoxOne("trazability",t);
    }
}
      
    
}
</script>
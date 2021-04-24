<template>
    <div>
        
     </div>
</template>
<script>
import * as messages from '../helper/messagesList'
// ======================================================================
// componente usado para envio de datos con el iframe
// ======================================================================
export default {
    name:"mensaje",
    props:
        ['child']
    ,
  mounted(){  //servira para actualizar cada vez el iframe
    this.$root.$refs.mensaje = this; // referencio para acceder desde otros componentes
      window.addEventListener('message', this.receiveMessage)
  },

 methods: {
    async envio_data (message) {//arreglar if 
        var wn;
        var messagesList=await messages.sendR()
        var mensaje
        messagesList.forEach(i=>{//se recorre arreglo de mensajes para identificar el que se necesita
            if(message==i.idm){
                
                mensaje=i;
                if(message==0){
                    mensaje.id=localStorage.getItem('idProject')
                }
            
            }
        });
        console.log(mensaje)
        wn = await document.getElementById('piStar').contentWindow;
        // postMessage arguments: data to send, target origin
        console.log('intentando pasar datos');
        wn.postMessage(mensaje, this.child);
        
    },
    receiveMessage (event) {
        if(event.data==="cargada"){
            console.log(event.data);
            this.envio_data('0');
            console.log("mensaje recibido");
        }else{
            console.log(event.data)
        }
         
    }

 }
}
</script>
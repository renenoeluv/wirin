<template>
    <div>
        <modalN></modalN>
     </div>
</template>
<script>
import * as messages from '../helper/messagesList'
import modalN from '../components/modals/modalN'


// ======================================================================
// componente usado para envio de datos con el iframe
// ======================================================================
export default {
    name:"mensaje",
    components:{modalN},
    data(){
        return{
            msgR:{}
        }
    },
    props:
        ['child']
    ,
  mounted(){  //servira para actualizar cada vez el iframe
    this.mount();
    this.$root.$refs.mensaje = this; // referencio para acceder desde otros componentes
      window.addEventListener('message', this.receiveMessage)
  },

 methods: {
    async mount (){
        this.msgR = await messages.recieveR()
    },
    async envio_data (message) {//arreglar if 
        var wn;
        var messagesList=await messages.sendR()
        var mensaje
        var flag=true
        var n=0
        var i=0
        while(flag && n<messagesList.length){
            i=messagesList[n]
            if(message==i.idm){
                
                mensaje=i;
                if(message==0){
                    mensaje.id=localStorage.getItem('idProject')
                }
                flag=false
            }
            n=n+1
        }
        console.log(mensaje)
        wn = await document.getElementById('piStar').contentWindow;
        // postMessage arguments: data to send, target origin
        console.log('intentando pasar datos');
        wn.postMessage(mensaje, this.child);
        
    },
    receiveMessage (event) {
        var messagesList=this.msgR
        var flag= true
        var i
        var n=0
        while(flag && n<messagesList.length){
            i=messagesList[n]
            //console.log(messagesList[n])
            if(event.data.idm==i.idm){
                    if(i.idm==0){
                        this.envio_data('0');
                    }else if (i.actions=="modal"){
                        console.log("54")

                        this.$root.$refs.modalN.showMsgBoxOne(i.state,i.state);
                    }
                flag=false
            }
            n=n+1
        }


         
    }

 }
}
</script>
<template>
    <div>
        
     </div>
</template>
<script>
// ======================================================================
// componente usado para testear el envio de datos con el iframe
// ======================================================================
export default {
    props:
        ['child']
    ,
  mounted(){  //servira para actualizar cada vez el iframe
      window.addEventListener('message', this.receiveMessage)
  },

 methods: {
  
    async envio_data () {
      let mensaje={
          ok:true,
          token:"aca va el token",
          id:localStorage.getItem('idProject')
        };
      var wn = await document.getElementById('piStar').contentWindow;
// postMessage arguments: data to send, target origin
        console.log('intentando pasar datos');
        wn.postMessage(mensaje, this.child);
    },
    receiveMessage (event) {
        if(event.data==="cargada"){
            console.log(event.data);
            this.envio_data();
            console.log("mensaje recibido");
        }
         
    }

 }
}
</script>
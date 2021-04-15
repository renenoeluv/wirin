<template>
    <div>
        
     </div>
</template>
<script>
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
    test: function(){
        console.log('holo')
    },
    async envio_data (message) {//arreglar if 
        var wn;
        if(message=='m0'){
            let mensaje={
            ok:true,
            idm:0,
            token:"aca va el token",
            id:localStorage.getItem('idProject')
            };
            wn = await document.getElementById('piStar').contentWindow;
    // postMessage arguments: data to send, target origin
            console.log('intentando pasar datos');
            wn.postMessage(mensaje, this.child);
        }else if(message=='m1'){
            let mensaje={
            ok:true,
            idm:1,
            state:'transform',
            };
            wn = await document.getElementById('piStar').contentWindow;
    // postMessage arguments: data to send, target origin
            console.log('intentando pasar datos');
            wn.postMessage(mensaje, this.child);
        }else if(message=='m2'){
            let mensaje={
            ok:true,
            idm:2,
            state:'verify',
            };
            wn = await document.getElementById('piStar').contentWindow;
    // postMessage arguments: data to send, target origin
            console.log('intentando pasar datos');
            wn.postMessage(mensaje, this.child);
        }else if(message=='m3'){
            let mensaje={
            ok:true,
            idm:3,
            state:'save',
            };
            wn = await document.getElementById('piStar').contentWindow;
    // postMessage arguments: data to send, target origin
            console.log('intentando pasar datos');
            wn.postMessage(mensaje, this.child);
        }else{
            let mensaje={
            ok:false,
            };
            wn = await document.getElementById('piStar').contentWindow;
    // postMessage arguments: data to send, target origin
            console.log('intentando pasar datos');
            wn.postMessage(mensaje, this.child);
        }
      
    },
    receiveMessage (event) {
        if(event.data==="cargada"){
            console.log(event.data);
            this.envio_data('m0');
            console.log("mensaje recibido");
        }else{
            console.log(event.data)
        }
         
    }

 }
}
</script>
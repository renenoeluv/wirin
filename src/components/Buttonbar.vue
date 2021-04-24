<template>
<b-navbar toggleable="md" type="dark" variant="dark">
     
     
    <div v-if="transform">
        <b-navbar-brand v-b-toggle @click="message('1')" >Transform and save</b-navbar-brand>
    </div>
    <div v-if="verify">
        <b-navbar-brand v-b-toggle @click="message('2')">Verify</b-navbar-brand>
    </div>
    
    <b-navbar-brand v-b-toggle @click="message('3')">Save</b-navbar-brand>
    
    <div v-if="autosave">
        <b-navbar-brand v-b-toggle @click="message('4')">Auto Save</b-navbar-brand>

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
      autosave:Boolean
},
methods:{
    message(message){
        console.log(message)
        this.$root.$refs.mensaje.envio_data(message);//llamo a funcion para enviar mensajes de componente mensaje
    }
}
      
    
}
</script>
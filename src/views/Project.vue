<template>
    <div>
        <navbar 
            :create="false"
        ></navbar>
        <alertbar Text="Project" :project="project_name"></alertbar>
        <b-container fluid="lg" style="margin-top:10%;">
            <b-row cols-md="1" align-content="center">
                <models-item></models-item>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import ModelsItem from '../components/ModelsItem.vue'
import Navbar from '../components/Navbar.vue'
import alertbar from '../components/alertbar'

export default {
  components: { Navbar, ModelsItem, alertbar },
    name:'project',
    mounted(){
       // window.removeEventListener('message',this.receiveMessage,false)
       this.$root.$refs.mensaje.removeListener()
       
    },
    computed:{
        project_name(){
            return  localStorage.getItem("projectName")
        }

    },
    methods:{
        
    }
}
</script>
<style scoped>

</style>
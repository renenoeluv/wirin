<template>
  <div id="z-position">
    <b-sidebar class="sidebar-project" id="sidebar-variant" title="Create Project" bg-variant="dark" text-variant="light" shadow>
        <div id="insideSidebar">
            
            
            <div>
                <b-form inline>
                    
                    <label class="sr-only" for="inline-form-input-username">Project name</label>
                    
                    <b-form-input  type="nombre" v-model="nombre" placeholder="Project name"></b-form-input>
                    

                    <b-button  id="create" @click="create()"  variant="primary">Create</b-button>
                     
                </b-form>
            </div>
            

        </div>
    </b-sidebar>
  </div>
</template>
<style>
.sidebar-project{
    position: fixed;
    padding-top: 0%;
    height: 100;
}
#insideSidebar{
  padding-top: 10%;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 10%;
}
#z-position{
    position: absolute;
    width:20%;
    height:100%;
    z-index: 10;
    top: 5.5%;
    left: 0%;
}
#create{
    position: relative;
    left: 11.1644%;
    padding-right: 25%;
    padding-left: 25%;
}
#ProjectName{
    width:70%;
    position: relative;
}
</style>
<script>
import { mapActions } from 'vuex'
//import store from '../store'
export default {
    data(){//borrar 
        return{
         idUser:'nuevo2',
         nombre:'',
         estado:true,
         ultimaActualizacion: new Date()
          
        }
    },
    mounted(){
        this.idUser=localStorage.getItem("idUser")
    },
    methods:{
            ... mapActions('projects',['CreateProject']),
           create(){
               console.log("intentando abrir data")
              this.CreateProject(this.$data)

           }
            
        
    }
}
</script>

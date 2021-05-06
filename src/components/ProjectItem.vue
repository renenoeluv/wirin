<template>
    <b-card
        :header="project.nombre"
        style="max-width : 30rem;"
        class="mmb-2"
    >Project ID: {{project.idProyecto}}
    Last Update: {{(project.ultimaActualizacion)}}
        <b-button
            
            variant="success"
            
            @click="$emit('openProject',project.idProyecto,project.nombre)"
        
        >
            open project
        </b-button>
        
        <b-dropdown id="dropdown-1" text="..." class="m-md-2">
            <b-dropdown-item v-b-modal="'my-modal'" @click="$emit('modal',project._id,project.nombre,edit)" >edit</b-dropdown-item>
            <b-dropdown-item v-b-modal="'my-modal'" @click="$emit('modal',project._id,project.nombre,del)">delete</b-dropdown-item>
             
            
        </b-dropdown>
        
    </b-card>    
</template>

<script>


    export default {
  components: { },
        props:{
            project:{
                type: Object,
                required:true

            },
            edit:{default:"edit"},
            del:{default:"del"}

        }
    }
</script>
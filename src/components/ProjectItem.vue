<template>
    <b-card
        :title="project.nombre"
        style="max-width : 30rem;"
        class="mmb-2"
    >Project ID: {{project.idProyecto}}
    Last Update: {{(project.ultimaActualizacion)}}
        <b-button
            
            variant="success"
            
            @click="$emit('openProject',project.idProyecto)"
        
        >
            open project
        </b-button>
        
        <b-dropdown id="dropdown-1" text="..." class="m-md-2">
            <b-dropdown-item>edit</b-dropdown-item>
            <b-dropdown-item>delete</b-dropdown-item>
        </b-dropdown>
        
    </b-card>    
</template>

<script>
    export default {
        props:{
            project:{
                type: Object,
                required:true

            }
        }
    }
</script>
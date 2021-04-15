<template>
    <b-card
        :title="project.nombre"
        style="max-width : 30rem;"
        class="mmb-2"
    >Project ID: {{project.idProyecto}}
    Last Update: {{(project.ultimaActualizacion)}}
        <b-button
            block
            variant="success"
            
            @click="$emit('openProject',project.idProyecto)"
        
        >
            open project
        </b-button>
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
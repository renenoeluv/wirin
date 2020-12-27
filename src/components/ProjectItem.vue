<template>
    <b-card
        :title="project.nombre"
        :img-src="project.idProyecto"
        :img-alt="project.ultimaActualizacion"
        img-top
        style="max-width : 30rem;"
        class="mmb-2"
    >Project_ID {{project.idProyecto}}
    Last_Update {{project.ultimaActualizacion}}
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
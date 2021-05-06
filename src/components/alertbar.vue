<template>

    <b-alert show variant="success">{{Text}} {{project}}</b-alert>
   
</template>
<script>

export default {
    name:'alertbar',
    props:{
        Text:{
            type:String,
            default:"text"
        },
        project:{
            type:String,
            
        }
    }
}
</script>

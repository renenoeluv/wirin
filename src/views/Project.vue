<template>
    <div>
        <navbar 
            :create="false"
        ></navbar>
        
        <b-container fluid="xl">
            <b-row cols-md="1" align-content="center">
                <models-item></models-item>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import ModelsItem from '../components/ModelsItem.vue'
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar, ModelsItem },
    name:'project'
}
</script>
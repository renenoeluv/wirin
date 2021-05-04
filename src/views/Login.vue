<template>
    <div id="testing">
        <b-container fluid="xl">
            <b-row></b-row>
            <b-row id="fila1" align-v="center">
                
                <b-col offset-md="4">
                    <loginC></loginC>
                </b-col>
                <b-col >
                    <links></links>
                </b-col>
                 
            </b-row>
            
              
        <b-navbar toggleable type="dark" variant="dark" fixed="bottom">
            <b-navbar-brand>informacion de pagina?</b-navbar-brand>
            
    
         </b-navbar>
        </b-container>
         
    </div>
</template>

<script>
import loginC from '../components/login'
import links from '../components/linksCard'
export default {
    name:"login",
    components:{loginC,links}
    
}
</script>
<style>


#fila1{
    margin-top: 10%;
}
#testing{
    height: 100vh;
    background-image: url("https://www.bing.com/th?id=OHR.LaughingZebras_ROW1936408378_1920x1080.jpg");
}

</style>
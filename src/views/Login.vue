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
            <b-col sm="1"><b-navbar-brand>WIRIN Model-Driven Engineering Environment</b-navbar-brand></b-col>
            <b-col  offset="10">
                <b-row>
                     <b-col md="4">
                <b-icon scale="2" icon="facebook"  variant="white"></b-icon>
                </b-col>
                 <b-col md="4">
              <b-icon  scale="2" icon="instagram"  variant="white"></b-icon>
              </b-col>
                 <b-col md="4">
               
               <b-icon scale="2" icon="github" style="padding=23px;" variant="white"></b-icon>
               </b-col>
                </b-row>
            </b-col>
             
         </b-navbar>
        </b-container>
         
    </div>
</template>

<script>
import loginC from '../components/login'
import links from '../components/linksCard'
export default {
    name:"login",
    components:{loginC,links},
    mounted(){
        console.log(process.env.VUE_APP_LOGIN)
        console.log(process.env.VUE_APP_PISTAR)
    },
    methods:{
        
    }
    
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
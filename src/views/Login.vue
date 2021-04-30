<template>
    <div>
        <h1>Este sera el login</h1>
        <b-container fluid="sm">
            <b-row>
                <b-col md="6" offset-md="4">
                    <b-card body-border-variant="success" class="card">
                        <h6>Username</h6>
                        <b-form class="user" inline>
                            
                            <label class="sr-only" for="inline-form-input-username">Username</label>
                            
                            <b-form-input  type="user" v-model="user" placeholder="User"></b-form-input>
                        </b-form>
                        <div class="login">
                            <h6>Password</h6>
                            <b-form class="pass" inline>
                                
                                <label class="sr-only" for="inline-form-input-username">Project name</label>
                                
                                <b-form-input  type="password" v-model="password" placeholder="Password"></b-form-input>
                                

                                
                            </b-form>
                        </div>   
                        <div class="login">
                            <b-button  id="sign" @click="sign()"  variant="success">Sign in</b-button>
                        </div> 
                        <div class="login">
                            <router-link to="/register">Create an account</router-link>
                        </div>
                        
                    </b-card>
            
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
 import {mapActions, mapGetters,/*mapState,/*mapMutations*/} from 'vuex'
export default {
    name:"login",
    methods:{
        async sign(){
            console.log(this.user);
            console.log(this.password)
            let email = this.user
            let password= this.password
            let response=await this.login({email,password})//llamo a action de vuex
            if(response==true){
               
                 this.$router.push('/projects')
        
            }else{//aca modificar computadas
                console.log("data incorrecta")
            }
        
        },
        ...mapGetters("user",['isLoggedIn']),
        ...mapActions("user",['login'])
        
        
    },
    data(){
        return{
            
            user:'',
            password:''
        
            
        }
    }
    
}
</script>
<style>
.card{
    
    width: fit-content;
    
}
.user{
    position: relative;
    margin: auto;
    overflow: auto;
}
.pass{
    position: relative;
    margin-top: 3%;
    overflow: auto;
    
    
}
.login{
    margin-top: 10%;
}
#create{
    position: relative;
    left: 1%;
    padding-right: 15%;
    padding-left: 17%;
}

</style>
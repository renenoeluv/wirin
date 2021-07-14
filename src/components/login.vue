<template>
    <div>
        <b-card-group deck ref="cardLogin">
                    <b-card  body-border-variant="success" class="card" align="center">
                        <img src="../assets/logo.png" width="170">
                    
                        <b-form-group
                            label="Email"
                            label-for="name-input"
                            invalid-feedback=" Incorrect username"
                            :state="userState"
                        >  
                            
                            <b-form-input
                                id="name-input"
                                
                                :state="userState"
                                v-model="user" 
                                placeholder="User"
                                required
                                
                            ></b-form-input>
                        </b-form-group>
                        <div class="login">
                            <b-form-group
                                label="password"
                                label-for="password"
                                invalid-feedback=" Incorrect password. "
                                :state="passwordState"
                                
                            >     
                                
                                <b-form-input
                                    id="password"  
                                    type="password"
                                    v-model="password" 
                                    placeholder="Password"
                                    :state="passwordState"
                                    required
                                ></b-form-input>
                                

                                
                            </b-form-group>
                        </div>   
                        <div class="login">
                            <b-button  id="sign" @click="sign" variant="success">Sign in</b-button>
                        </div> 
                        <div class="login">
                            <router-link to="/register">Create an account</router-link>
                        </div>
                        
                    </b-card>
        </b-card-group>   
                
                
    </div>
</template>





<script>

 import {mapActions, mapGetters,/*mapState,/*mapMutations*/} from 'vuex'
export default {
    name:"login",
    computed:{
    },
    methods:{

        async sign(){
            this.loading()
            this.userState=null
            this.passwordState=null
            let email = this.user
            let password= this.password
            let response=await this.login({email,password})//llamo a action de vuex
            if(response==true){
                this.loader.hide()
                 this.$router.push('/projects')
        
            }else{//aca modificar computadas
                this.loader.hide()
                console.log(response)
                console.log("data incorrecta")
                if(response.idErr==1){
                    this.userState=false
                }else if(response.idErr==2){
                    this.passwordState=false
                }
            }
        
        },
        async loading() {
                this.loader = this.$loading.show({
                    // Optional parameters
                    container: this.fullPage ? null : this.$refs.cardLogin,
                    canCancel: false,
                    onCancel: this.onCancel,
                    backgroundColor:"white",
                    opacity:0,
                    zIndex:99,
                    color: "black",
                    loader:"bars"
                },{
                    // Pass slots by their names

                });
            },
            onCancel() {
                console.log('User cancelled the loader.')
            },
        ...mapGetters("user",['isLoggedIn']),
        ...mapActions("user",['login']),
        checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
        
        
    },
    data(){
        return{
            
            user:'',
            password:'',
            userState:null,
            passwordState:null,
            loader:''
        }
    }
    
}
</script>
<style>
/* .card{
    background-color: rgba(78, 73, 78, 0.11);
} */
</style>

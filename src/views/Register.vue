<template>
    <div>
        <h1>Este sera el registro</h1>
        <b-container fluid="sm">
            <b-row>
                <b-col md="6" offset-md="4">
                    <b-card body-border-variant="success" class="card">
                        <label for="input-live">Name:</label>
                        
                        <b-form-input  type="name" v-model="name" placeholder="Name"></b-form-input>
                        
                        <div class="login">
                            <label for="input-live">email:</label>
                            
                            <b-form-input  type="pass" v-model="email" placeholder="Email"></b-form-input>
                            
                            <label for="input-live">Confirm email:</label>
                            <b-form-input
                                id="input-live-email"
                                v-model="cEmail"
                                :state="emailState"
                                aria-describedby="input-live-help input-live-email-feedback"
                                placeholder="Confirm your email"
                                trim
                            ></b-form-input>
                            <b-form-invalid-feedback id="input-live-email-feedback">
                                jsjsjs
                            </b-form-invalid-feedback>
                        </div> 

                        <div class="login">
                            <label for="input-live">Password:</label>
                           
                            <b-form-input  type="password" v-model="password" placeholder="Password"></b-form-input>
                            
                            <label for="input-live">Confirm password:</label>
                            <b-form-input
                            
                                id="input-live-email"
                                type="password"
                                v-model="cPassword"
                                :state="passwordState"
                                aria-describedby="input-live-help input-live-email-feedback"
                                placeholder="Confirm your email"
                                trim
                            ></b-form-input>
                            <b-form-invalid-feedback id="input-live-email-feedback">
                                jsjsjs
                            </b-form-invalid-feedback>
                        </div>   
                        <div class="login">
                            <b-button  id="create" @click="create()"  variant="success">Create account</b-button>
                        </div> 
                        
                        
                    </b-card>
            
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name:"register",
    methods:{
        create(){//funcion encargada de llamar la creacion del usuario
            console.log("ssss")
        }
    },
    computed: {
        emailState(){
            return this.email === this.cEmail ? true : false
        },
        passwordState(){
            return this.password === this.cPassword ? true : false
        }
    },
    data(){
        return {
            name:'',
            email:'',
            cEmail:'',
            password:'',
            cPassword:''
        }
    }

}
</script>
<style>
.card{
    
    width: fit-content;
    
}

.login{
    margin-top: 10%;
}
#create{
    position: relative;
    width: 100%;
}

</style>
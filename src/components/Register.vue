<template>
    <div>
         <b-row style="margin-top:20px">
                <b-col md="5" offset-md="4">
                <b-card-group deck>
                    <b-card body-border-variant="success" class="card">
                       <img src="../assets/logo.png" width="170">
                        <b-form-group
                        id="name"
                        label="Enter your user"
                        label-for="input-name"
                        :invalid-feedback="invalidFeedbackName"
                        :state="stateName"
                        >
                           <b-form-input id="input-name" v-model="name" :state="stateName" trim></b-form-input>
                        </b-form-group>
                        
                        <b-form-group
                        id="email"
                        label="Enter your email"
                        label-for="input-email"
                        :invalid-feedback="invalidFeedbackEmail"
                        :state="stateEmail"
                        >
                           <b-form-input id="input-email" v-model="email" :state="stateEmail" trim></b-form-input>
                        </b-form-group>
                        <b-form-group
                        id="email"
                        label="Repeat your email"
                        label-for="input-email"
                        :invalid-feedback="invalidFeedbackEmailR"
                        :state="stateEmailR"
                        >
                           <b-form-input id="input-emailR" v-model="repeatEmail" :state="stateEmailR" trim></b-form-input>
                        </b-form-group>
                        <b-form-group
                        id="email"
                        label="Enter your password"
                        label-for="input-email"
                        :invalid-feedback="invalidFeedbackPassword"
                        :state="statePassword"
                        >
                           <b-form-input id="input-password" type="password" v-model="password" :state="statePassword" trim></b-form-input>
                        </b-form-group>
                        <b-form-group
                        id="email"
                        label="Repeat your password"
                        label-for="input-passwordR"
                        :invalid-feedback="invalidFeedbackPasswordR"
                        :state="statePasswordR"
                        >
                           <b-form-input id="input-passwordR" type="password"  v-model="repeatPassword" :state="statePasswordR" trim></b-form-input>
                        </b-form-group>
                        <b-button variant="success" @click="create" block>Create User</b-button>
                    </b-card>
                </b-card-group>
                </b-col>
            </b-row>
            <modalN></modalN>
    </div>
</template>
<script>
import * as Uregister from '../helper/newUser'
import modalN from '../components/modals/modalN'

export default {
    name:"register",
    components:{modalN},
    methods: {
        async create(){
            if(this.stateName && this.stateEmailR && this.statePasswordR){
                let res=await Uregister.register(this.$data)
                if(res.ok=== true){
                    let some= await this.$root.$refs.modalN.showMsgBoxOne("User created","The user "+this.name +" has been created");
                    if(some===true){
                        this.$router.push('/')
                    }
                }else{
                    this.emailError=false
                }
            }
        },
        
    },
   computed: {
      
      stateName() {
          if(this.name.length >= 4){
              return true
          }else if (this.name.length > 0){
              return false
          }else{
              return null
          }
          
        
        
      },
      invalidFeedbackName() {
        if (this.name.length > 0) {
          return 'Enter at least 4 characters.'
        }
        return 'Please enter your user.'
      },
      stateEmail(){
          if(this.emailError===false){
              return false
          }
          if(this.email.length >= 4){
              return true
          }else if (this.email.length > 0){
              return false
          }else{
              return null
          }
      },
      invalidFeedbackEmail(){
          if(this.emailError===false){
              return 'The email is in use'
          }
          if (this.email.length > 0) {
          return 'Enter at least 4 characters.'
        }
          return "Please enter your mail"
      },
      stateEmailR(){
          if(this.email!= this.repeatEmail){
              return false
          }else if(this.email === this.repeatEmail && this.repeatEmail.length>0){
              return true
          }
          return null
      },
      invalidFeedbackEmailR(){
          
          if(this.email!= this.repeatEmail){
              return "The email are not the same"
          }
          return null
      },
      statePassword(){
          if(this.password.length >= 6){
              return true
          }else if (this.password.length > 0){
              return false
          }else{
              return null
          }
      },
      invalidFeedbackPassword(){
         if (this.password.length > 0) {
          return 'Enter at least 6 characters.'
        }
          return "Please enter your mail"
      
      },
      statePasswordR(){
          if(this.password!= this.repeatPassword){
              return false
          }else if(this.password === this.repeatPassword && this.repeatPassword.length>0){
              return true
          }
          return null
      },
      invalidFeedbackPasswordR(){
         if(this.password!= this.repeatPassword){
              return "The password are not the same"
          }
          return null
      }
    },
    data() {
      return {
        name: '',
        email:'',
        repeatEmail:'',
        password:'',
        repeatPassword:'',
        emailError:'',
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
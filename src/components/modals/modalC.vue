<template>
  <div>
    <b-modal
      id="modalC"
      ref="modal"
      title="New Project"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Enter the name of the new project :"
          label-for="name-input"
          :invalid-feedback="invalidFeedback"
          :state="nameState"
        >
        
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import {test} from '../../helper/nameProject'
import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        name: '',
        nameState: null,
        namecheck:true,
        actions2P:false,
        data:{
          nombre:'',
          estado:'',
          idUser:'',
          ultimaActualizacion:''
        },
        loader:''
      }
    },
    computed:{
      
      invalidFeedback(){//modificador de texto de feedback
        if(!this.name){
          return "Name is required"
        }
        if(!this.namecheck){
          return "the project name is assigned to another project"
        }
        return ""
      }
      
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        console.log(this.name)
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      async handleSubmit() {
        if(!this.nameValidity(this.name)){
          return
        }
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        let state= await this.Create()
        // Hide the modal manually
        console.log(state)
        await this.showMsgBoxOne(state)
        this.$nextTick(() => {
        this.$bvModal.hide('modalC')
        })
        
        
      },
      nameValidity(name){//verifica que el nuevo nombre sea valido
        const testtttt = test(name)
        this.namecheck= testtttt
        this.nameState=testtttt
        return testtttt
      },
      ... mapActions('projects',['CreateProject']),
      async Create(){//funcion encargada de interactuar con vuex
        this.loading()
        this.data.nombre=this.name
        this.data.estado=true
        this.data.idUser=localStorage.getItem("idUser")
        this.data.ultimaActualizacion= new Date()
        return await this.CreateProject(this.data)
      },
      showMsgBoxOne(state) {
        this.loader.hide()
        this.boxOne = ''
        var message
        if(state==true){
          message='The project was created'
        }else{
          message = "An error has occurred"
        }
        this.$bvModal.msgBoxOk(message,{
          title:"State Project"
        })
          .then(value => {
            this.boxOne = value
            return value
          })
          .catch(err => {
            // An error occurred
            console.log(err)
          })
      },
      async loading() {
                this.loader = this.$loading.show({
                    // Optional parameters
                    container: this.fullPage ? null : this.$refs.card,
                    canCancel: false,
                    onCancel: this.onCancel,
                    backgroundColor:"white",
                    opacity:0,
                    zIndex:1041,
                    color: "black",
                    loader:"bars"
                },{
                    // Pass slots by their names

                });
            },
            onCancel() {
                console.log('User cancelled the loader.')
            },
    }
  }
</script>
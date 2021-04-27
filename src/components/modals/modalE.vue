<template>
  <div>
    <b-modal
      id="my-modal"
      ref="modal"
      :title="title"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :label="label"
          label-for="name-input"
          :invalid-feedback="invalidFeedback"
          :state="nameState"
        >
        {{name_project}}
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
        actions2P:false
      }
    },
    props:{
      project:{},
      name_project:{},
      action:{}

    },
    computed:{
      title(){//modificador de titulo de modal
        switch (this.action) {
          case "edit":
            return "Edit Project";
          case "del":
            return "Delete project";
            
          default:
            return "";
        }
        
      },
      invalidFeedback(){//modificador de texto de feedback
        if(!this.name){
          return "Name is required"
        }
        if(!this.namecheck){
          return "the project name is assigned to another project"
        }
        return ""
      },
      label(){//modificador de label de form
        switch (this.action) {
            case "edit":
              return "Enter the new name";
            case "del":
              return "write the name of the project";
              
            default:
              return "";
          }
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
        console.log(this.project)
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        if(!this.nameValidity(this.name)){
          return
        }
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        this.modify()
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('my-modal')
        })
      },
      nameValidity(name){//verifica que el nuevo nombre sea valido
        console.log("marca")
        const testtttt = test(name)
        this.namecheck= testtttt
        this.nameState=testtttt
        return testtttt
      },
      ... mapActions('projects',['UpdateProject']),
      modify(){//funcion encargada de interactuar con vuex
        var data;
        if(this.action=="edit"){
          data = {
            nombre:this.name,
            _id:this.project
          }
        }
        if(this.action=="del"){
          data = {
            _id:this.project,
            estado:this.actions2P
          }
        }

        this.UpdateProject(data)

           
      }
    }
  }
</script>
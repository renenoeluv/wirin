<template>
  <div>
   
     
    
  </div>
</template>

<script>
  export default {
    data(){
      return {
        boxOne:''
      }
    },
    mounted(){
      this.$root.$refs.modalN = this;
    },
    methods:{
      showMsgBoxOne() {
        this.boxOne = ''

        this.$bvModal.msgBoxOk('Action completed')
          .then(value => {
            this.boxOne = value
          })
          .catch(err => {
            
            // An error occurred
            console.log(err)
          })
      },
    }
  }
</script>
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
      async showMsgBoxOne(title,message) {
        this.boxOne = ''

        return await this.$bvModal.msgBoxOk(message,{
          title:title
        })
          .then(value => {
            this.boxOne = value
            console.log("some")
            return true
          })
          .catch(err => {
            
            // An error occurred
            console.log(err)
            return false
          })
      },
    }
  }
</script>
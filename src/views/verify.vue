<template>
  <div >
     {{token}}
  </div>
</template>

<script>

// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import pistar from '@/comp<onents/Pistar.vue'

import {verify} from '../helper/newUser'
export default {
  name: 'verify',
  components: {
  },
  mounted(){
      this.submit()
  },
  methods:{
    async validate(){
      let res = await verify(this.token)
      console.log(res)
      return res
    },
    async submit() {
                let loader = this.$loading.show({
                    // Optional parameters
                    container: this.fullPage ? null : this.$refs.formContainer,
                    canCancel: false,
                    onCancel: this.onCancel,
                    color: "black",
                    loader:"bars"
                },{
                    // Pass slots by their names

                });
                
                let res = await this.validate()
                if(res.ok===true){
                  loader.hide()
                  this.$router.push('/')
                }else{
                  console.log("asad")
                }
                
                
               
            },
            onCancel() {
                console.log('User cancelled the loader.')
            }
  },
  props: {
      token:String,
  }
}
</script>

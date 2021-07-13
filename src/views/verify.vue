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
      this.validate()
  },
  methods:{
    async validate(){
      let res = await verify(this.token)
      console.log(res)
    }
  },
  props: {
      token:String,
  }
}
</script>

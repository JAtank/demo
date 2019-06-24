<template>
  <div id="app">
     <div>这是一个demo</div>
     <div class="demo">
       <finding @findPeople="toDialogue()" v-if="false"></finding>
       <dialogue v-if="!showFinding"></dialogue>
       <wave></wave>
       <zyDemo v-if="false"></zyDemo>
     </div>
  </div>
</template>

<script>
import finding from "./dialog/finding/finding"
import dialogue from "./dialog/dialogue/dialogue"
import wave from "./dialog/dialogue/wave"
import zyDemo from "./zy_demo"
export default {
  name: 'app',
  data () {
    return {
      showFinding:true
    }
  },
  components:{finding,zyDemo,dialogue,wave},
  created(){
    if (typeof (androidJs) != 'undefined') {
      androidJs.closeWel();
    }
  },
  methods:{
    toDialogue(){
      this.showFinding = false
    }
  }
}
</script>

<style lang="scss">
div,a,p,span,img{
  box-sizing: border-box;
  font-size: 45px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 45px;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top:0;
  .demo{
    width: 80%;
    height: 1457px;
    margin: 0 auto;
    background-color: antiquewhite;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

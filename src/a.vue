<template>
  <div id="a">
     <div @click="change()">这是一个</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  props:{
    name:{
      type:String
    }
  },
  data () {
    return {}
  },
  created(){},
  methods:{

  }
}
</script>

<style lang="scss">
div,a,p,span,img{
  box-sizing: border-box;
  font-size: 45px;
}
#a {
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
}

</style>

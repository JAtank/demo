<template>
  <div id="app">
     <div>这是一个demo</div>
     <div class="demo">
       <div class="word-content">
          <div  class="item"
                v-for="item,index in word_list"
                :key="index">
          </div>
       </div>
       <div class="word">

       </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      word:'classRoom',
      word_list:['cla','ss','Room'],
      p_list:['../assets/p_1.png','../assets/p_2.png','../assets/p_3.png','../assets/p_4.png','../assets/p_5.png'],
      bg_list:['../assets/bg_2.png','../assets/bg_3.png','../assets/bg_4.png','../assets/bg_5.png']
    }
  },
  methods:{
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 24px;
}
.word-content{

}
.word{

}
</style>

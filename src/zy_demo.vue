<template>
    <div id="audio">
      <div class="btn"
           v-for="item,index in data"
           :key="index"
           @click="click(index)"
           ref="btn">
        <a class="item" v-html="item.name"></a>
        <audio preload="auto" :src="item.audio_url" ref="audio" :key="index"></audio>
      </div>
    </div>
</template>

<script>
    import obj from "./text.js"
    export default {
        name: "zy_demo",
        data(){
          return{
            data:obj.data.initials,
            audio:{}
          }
        },
        created() {},
        methods:{
          click(index){
            let a = this.$refs.audio;
            // console.log(a[index].preload)
            a[index].load();
            a[index].play();
          },
        }
    }
</script>

<style lang="scss" scoped>
#audio{
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  .btn{
   display: inline-flex;
  }
  .item{
    width: 80px;
    height: 80px;
    border: 1px solid salmon;
    margin-left: 30px;
    margin-top: 30px;
  }
}
</style>

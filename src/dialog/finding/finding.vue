/**
* 组件：搜寻组件
*/
<template>
    <div id="finding">
      <div class="background" :class="{'has-people':hasPeople}"></div>
      <transition name="fade">
        <bubble class="bubble"
                :class="getClass(index)"
                v-if="index == curIndex"
                v-for="index in 3"
                :key="index"></bubble>
      </transition>
      <div class="online-people" v-if="hasPeople"></div>
      <div class="line" v-if="hasPeople"></div>
      <div class="up-self"></div>
    </div>
</template>

<script>
  import bubble from "./bubble"
    export default {
      name: "finding",
      components:{
        bubble
      },
      data(){
        return{
          curIndex:0,
          hasPeople:false,
          time:0
        }
      },
      created(){
        this.initAnimation();
        setTimeout(()=>{
          this.hasPeople = true;
          setTimeout(()=>{
            this.$emit("findPeople")
          },1500)
        },7000);
      },
      methods:{
        getClass(index){
          return "bubble-"+index;
        },
        initAnimation(){
          clearTimeout(this.time);
          this.time = setTimeout(()=>{
            if(this.hasPeople){
              this.curIndex=0;
              clearTimeout(this.time);
              return;
            }
            if(this.curIndex==3){
              this.curIndex=0;
              this.initAnimation();
              return;
            }
            this.curIndex++;
            this.initAnimation();
          },1500)
        }
      }
    }
</script>

<style lang="scss" scoped>
  $bigWidth:1200;
  $smallWidth:200;
  #finding{
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: $bigWidth+px;
    height: $bigWidth+px;
    .background{
      border-radius: 50% 50%;
      border: solid 1px aquamarine;
      background-color: aquamarine;
      animation: scale-1 2s infinite;
      &.has-people{
        animation: scale-1 2s;
        animation-fill-mode: forwards;
      }
      @keyframes scale-1 {
        0%{
          width: $smallWidth+px;
          height: $smallWidth+px;
          opacity: 1;
        }
        100%{
          width: $bigWidth+px;
          height: $bigWidth+px;
          opacity: .3;
        }
      }
    }
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to{
      opacity: 0;
    }
    .bubble{
      position: absolute;
      &.bubble-1{
        left: 130px;
        top:700px;
      }
      &.bubble-2{
        left: 830px;
        top:200px;
      }
      &.bubble-3{
        left: 780px;
        top:800px;
      }
    }
    .online-people{
      position: absolute;
      top: $smallWidth+ px;
      width: $smallWidth+px;
      height: $smallWidth+px;
      border-radius: 50% 50%;
      border: solid 1px saddlebrown;
      background-color: saddlebrown;
    }
    .line{
      position: absolute;
      top:2*$smallWidth+px;
      width: 5px;
      background-color: seagreen;
      animation: line-1 1s ease;
      animation-fill-mode: forwards;
      @keyframes line-1 {
        from{
          height: 0;
        }
        to{
          height: $bigWidth - 3*$smallWidth +px;
        }
      }
    }
    .up-self{
      position: absolute;
      bottom: 0;
      width: $smallWidth+px;
      height: $smallWidth+px;
      border-radius: 50% 50%;
      border: solid 1px salmon;
      background-color: salmon;
    }
  }
</style>

<!--组件：对话框组件，个人语句显示-->
<template>
    <div id="dialogue-people" :class="{'right':isRight}">
      <div class="people" v-if="!isRight"></div>
      <dialogueBubble class="bubble"
                      :class="{'right':isRight,'left':!isRight}"
                      :isRight="isRight"
                      @showCur="$emit('showCur')"
                      @showNext="$emit('showNext')"
                      :dialogContent="dialogContent">
      </dialogueBubble>
      <div class="people right" v-if="isRight"></div>
    </div>
</template>

<script>
  import dialogueBubble from './dialogue-bubble'
    export default {
      name: "dialogue-people",
      props:{
        isRight:{
          type:Number,
          default:0
        },
        dialogContent:{
          type:String,
          default: ""
        }
      },
      components:{
        dialogueBubble
      }
    }
</script>

<style lang="scss" scoped>
#dialogue-people{
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  &.right{
    justify-content: flex-end;
  }
  .people{
    display: block;
    width: 200px;
    height: 200px;
    border-radius: 50% 50%;
    background-color: seagreen;
  }
  .bubble{
    margin-top: 55px;
    &.left{
      margin-left: -20px;
    }
    &.right{
      margin-right: -20px;
    }
  }
}
</style>

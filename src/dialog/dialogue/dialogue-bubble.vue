<!--组件：气泡对话框-->
<template>
    <div id="dialog-bubble" :class="{'right':isRight}">
      <div class="bubble">
        <a class="point left" v-if="!isRight"></a>
        <a class="content" :class="{'left':!isRight,'right':isRight}">
          <div class="play"
               :class="{'right':isRight}"
               v-if="!isWaiting">
            <label v-if="!isRight">
              播放
            </label>
            <span>90'</span>
            <label v-if="isRight">
              播放
            </label>
          </div>
          <div class="waiting" v-if="isWaiting">
            <label class="waitPoint"
                   :class="{'curPoint':index == curIndex}"
                   v-for="item,index in 3">
            </label>
          </div>
        </a>
        <a class="point right" v-if="isRight"></a>
      </div>
      <a class="text-content"
         :class="{'left':!isRight,'right':isRight}"
         v-if="!isWaiting">
        <p class="en-text"></p>
        <p class="cn-text" v-html="dialogContent"></p>
      </a>
    </div>
</template>

<script>
    export default {
      name: "dialogue-bubble",
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
      data(){
        return{
          curIndex:-1,
          isWaiting:false
        }
      },
      created(){
        this.isWaiting = true;
        this.$emit("showCur");
        setTimeout(()=>{
          this.isWaiting = false;
          this.$emit("showNext")
        },2500);
        this.initAnimation();
      },
      methods:{
        initAnimation(){
          setTimeout(()=>{
            if(!this.isWaiting){
              this.curIndex = -1;
              return;
            }
            if(this.curIndex==2){
              this.curIndex = -1;
            }
            this.curIndex++;
            this.initAnimation();
          },300)
        }
      }
    }
</script>

<style lang="scss" scoped>
  #dialog-bubble{
    position: relative;
    display: flex;
    flex-direction: column;
    width: 60%;
    &.right{
      align-items: flex-end;
    }
    .bubble{
      display: flex;
      width: 30%;
      .point{
        display: block;
        width: 30px;
        height: 30px;
        border-style: solid;
        border-width: 30px;
        margin-top: 20px;
        &.left{
          border-color: transparent saddlebrown transparent transparent;
          margin-right: -10px;
        }
        &.right{
          border-color: transparent transparent transparent saddlebrown;
          margin-left: -10px;
        }
      }
      .content{
        display: flex;
        width: 100%;
        height: 110px;
        padding: 10px;
        color: white;
        border: 10px solid saddlebrown;
        background-color: saddlebrown;
        border-radius: 15px;
        text-align: left;
        align-items: center;
        .play{
          width: 100%;
          &.right{
            text-align: right;
          }
        }
        .waiting{
          display: flex;
          width: 200px;
          align-items: center;
          .waitPoint{
            width: 20px;
            height: 20px;
            border-radius: 50% 50%;
            background-color: white;
            margin-left: 35px;
            &.curPoint{
              width: 30px;
              height: 30px;
            }
          }
        }
      }
    }
    .text-content{
      width: 95%;
      background-color: olivedrab;
      margin-top: 10px;
      padding: 30px;
      text-align: left;
      &.left{
        margin-left: 50px;
      }
      &.right{
        margin-right: 50px;
      }
    }
  }
</style>

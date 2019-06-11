<!--组件：气泡对话框-->
<template>
    <div id="dialog-bubble">
      <a class="point left" v-if="!isRight"></a>
      <a class="content" :class="{'left':!isRight,'right':isRight}">
        <span v-html="dialogContent" v-if="!isWaiting"></span>
        <div class="waiting" v-if="isWaiting">
          <label class="waitPoint"
                 :class="{'curPoint':index == curIndex}"
                 v-for="item,index in 3">
          </label>
        </div>
      </a>
      <a class="point right" v-if="isRight"></a>
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
        setTimeout(()=>{
          this.isWaiting = false;
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
    max-width: 60%;
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
     padding: 10px 30px;
     color: white;
     border: 10px solid saddlebrown;
     background-color: saddlebrown;
     border-radius: 15px;
     text-align: left;
     align-items: center;
     .waiting{
       display: flex;
       width: 200px;
       height: 30px;
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
</style>

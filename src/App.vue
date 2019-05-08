<template>
  <div id="app">
     <div>这是一个demo</div>
     <div class="demo">
       <div class="word-content">
<!--          <div class="item"-->
<!--               :class="[getClass(index),getAnimation(index)]"-->
<!--               v-for="item,index in word_list"-->
<!--               v-if="!showHB"-->
<!--               ref="wordItem"-->
<!--               :key="index">-->
<!--            <span v-html="selItem[index]" v-if="selItem.length"></span>-->
<!--          </div>-->
          <div class="item-content">
            <div class="item item-1"
                 :class="{'item-1-animation-1':word_list.length==3&&showAnimation}">
              <span v-html="selItem[0]"></span>
            </div>
            <div class="item item-2" v-if="word_list.length>=2">
              <span v-html="selItem[1]"></span>
            </div>
            <div class="item item-3"
                 :class="{'item-3-animation-1':word_list.length==3&&showAnimation}"
                 v-if="word_list.length>=3">
              <span v-html="selItem[2]"></span>
            </div>
            <div class="item item-4" v-if="word_list.length>=4">
              <span v-html="selItem[3]"></span>
            </div>
            <div class="item item-5" v-if="word_list.length>=5">
              <span v-html="selItem[4]"></span>
            </div>
          </div>
          <div class="hb-item"
               :class="getHBClass()"
               v-html="word"
               v-if="showHB">
          </div>
       </div>
       <div class="word">
          <div class="word-item"
               v-for="item,index in word_list"
               v-html="item"
               @click="setItemContent(item,index)">
          </div>
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
      bg_list:['./assets/bg_2.png','./assets/bg_3.png','./assets/bg_4.png','./assets/bg_5.png'],
      selItem:[],
      showHB:false,
      showAnimation:false
    }
  },
  created(){},
  methods:{
    // getClass(index){
    //   return 'item_'+(index+1);
    // },
    getHBClass(){
      return 'hb-item-'+this.word_list.length;
    },
    setItemContent(item,index){
      if(this.selItem.length==this.word_list.length){
        window.toast("已经选择完成");
        return;
      }
      this.selItem.push(item);
      if(this.selItem.length==this.word_list.length){
        let str=this.selItem.join('');
        if(str == this.word){
          // this.animationStart();
          // this.showHB = true;
          this.showAnimation = true;
          return;
        }
        window.toast("选择错误")
      }
    },
    animationStart(){
     console.log(this.$refs.wordItem)
     let anList = this.$refs.wordItem;
     if(anList.length == 3){
       this.setAnTime1((i)=>{
         anList[0].style.marginRight = i+'px';
         anList[2].style.marginLeft = 30+i+'px';
       })
     }
    },
    setAnTime1(callBack){
      let a=0;
      let b = 0;
      a = setInterval(()=>{
        b+=50;
        console.log(b);
        callBack(b*0.01);
        if(b>=8000) {
          clearInterval(a);
          return;
        }
      },10)
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
}
.demo{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.word-content{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  width:100%;
  height: 50%;
  .item-content{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
  }
  .item-1{
    width: 308px;
    height: 340px;
    background: url("./assets/p_1.png") center no-repeat;
    background-size: contain;
    &.item-1-animation-1{
    /*为左一*/
      animation: a-1-1 2s;
      animation-fill-mode: forwards;
      @keyframes a-1-1{
        0%{
          margin-right: 0px;
          opacity: 100%;
        }
        50%{
          margin-right: 50px;
          opacity: 100%;
        }
        99%{
          opacity: 100%;
        }
        100%{
          margin-right: -30px;
          opacity: 0;
        }
      }
    }
    &.item-1-animation-2{
    /*为左二*/
    }
  }
  .item-2{
    width: 403px;
    height: 340px;
    background: url("./assets/p_2.png") center no-repeat;
    background-size: contain;
    &.item-2-animation-1{
    /*为右一*/
    }
    &.item-2-animation-2{
    /*为左一*/
    }
  }
  .item-3{
    width: 308px;
    height: 340px;
    background: url("./assets/p_3.png") center no-repeat;
    background-size: contain;
    &.item-3-animation-1{
    /*为右一*/
      animation: a-3-1 2s;
      animation-fill-mode: forwards;
      @keyframes a-3-1{
        0%{
          margin-left: 30px;
        }
        50%{
          margin-left: 80px;
        }
        100%{
          margin-left: 0px;
        }
      }
    }
  }
  .item-4{
    width: 407px;
    height: 241px;
    background: url("./assets/p_4.png") center no-repeat;
    background-size: contain;
    &.item-4-animation-1{
    /*为左一*/
    }
    &.item-4-animation-2{
    /*为左二*/
    }
  }
  .item-5{
    width: 308px;
    height: 340px;
    background: url("./assets/p_5.png") center no-repeat;
    background-size: contain;
    &.item-5-animation-1{
    /*为左二*/
    }
  }
  .hb-item{
    display: flex;
    align-items: center;
    justify-content: center;
    &.hb-item-2{
      width: 674px;
      height: 349px;
      background: url("./assets/bg_2.png") center no-repeat;
      background-size: contain;
    }
    &.hb-item-3{
      width: 931px;
      height: 349px;
      background: url("./assets/bg_3.png") center no-repeat;
      background-size: contain;
    }
    &.hb-item-4{
      width: 1292px;
      height: 349px;
      background: url("./assets/bg_4.png") center no-repeat;
      background-size: contain;
    }
    &.hb-item-5{
      width: 1549px;
      height: 349px;
      background: url("./assets/bg_5.png") center no-repeat;
      background-size: contain;
    }
  }
}
.word{
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  height: 50%;
  .word-item{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 334px;
    height: 220px;
    background-color: #e3f1cc;
    border-radius: 20px;
    margin-left: 46px;
    &:first-child{
      margin-left: 30px;
    }
  }
}
</style>

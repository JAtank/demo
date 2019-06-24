/**
* 组件：对话框
*/
<template>
    <div id="dialogue" ref="dialogue">
      <a class="hint" v-text="hint"></a>
      <btnHearten class="hearten" @dismiss="showHearten=false" v-if="showHearten"></btnHearten>
      <div class="content" ref="content">
        <dialogPeople v-for="item,index in dialog"
                      :isRight="item.isRight"
                      :dialogContent="item.content"
                      @showCur="showCur"
                      @showNext="showNext"
                      v-if="index <= curIndex"
                      ref="people"
                      :key="index">
        </dialogPeople>
      </div>
      <div class="play-content">
        <div class="btn" @click="showHearten=true" v-if="isShowBtn">鼓励</div>
        <wave class="wave"></wave>
      </div>
    </div>
</template>

<script>
  import dialogPeople from './dialogue-people';
  import btnHearten from './btn-hearten';
  import wave from './wave'
    export default {
      name: "dialogue",
      data(){
        return{
          hint:'这里是提示性语句的位置，请尽量避免财务信息的透露！！！',
          dialog:[
            {
              isRight:0,
              content:"how are you?"
            },
            {
              isRight:1,
              content:"我很好啊，用不用说:'how old are you ?'"
            },
            {
              isRight:0,
              content:"你是逗比吗，我们只是测试数据，搞得那么正规干嘛？"
            },
            {
              isRight:1,
              content:"人家可是很本分的人，只是考虑到了而已,今天有没有很好笑的笑话，因为如果没有的话，我的字数就不够，不能够来测试是否能撑开布局，那么这就很尴尬了！！"
            },
            {
              isRight:0,
              content:"你这也太没个性了，就让他多写一些内容，能死吗？ please tell me!!"
            },
            {
              isRight:1,
              content:"还是敷衍一下吧，哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
            },
            {
              isRight:1,
              content:"还是敷衍一下吧，哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
            },
            {
              isRight:1,
              content:"还是敷衍一下吧，哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
            },
            {
              isRight:1,
              content:"还是敷衍一下吧，哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
            }
          ],
          showHearten:false,
          isShowBtn:false,
          curIndex:0,
          scrollTop:0,
          time:0
        }
      },
      components:{
        dialogPeople,btnHearten,wave
      },
      created(){
        // this.initData();
      },
      methods:{
        initData(){
          this.time = setInterval(()=>{
            if(this.curIndex==this.dialog.length-1){
              clearInterval(this.time);
              return
            }
            this.curIndex++;
          },3000)
        },
        showCur(){
          this.$nextTick(()=>{
            this.getPeople();
          });
        },
        showNext(){
          this.$nextTick(()=>{
            this.getPeople();
            setTimeout(()=>{
              this.curIndex++;
            },200)
          });
        },
        getPeople(){ //自动滚动
           let people = this.$refs.people.concat([]);
           let el = people.pop().$el;
           let content = this.$refs.content;
           this.scrollTop += el.offsetHeight;
           content.scrollTop = this.scrollTop;
        }
      },
      beforeDestroy() {
        clearInterval(this.time);
      }
    }
</script>

<style lang="scss" scoped>
#dialogue{
  position: relative;
  width: 100%;
  height: 100%;
  background-color: salmon;
  .hint{
    position: absolute;
    display: flex;
    width: 60%;
    background-color: rgba(250,235,215,.4);
    top: 0;
    left: 20%;
    z-index: 20;
  }
  .hearten{
    bottom: 15%;
  }
  .content{
    position: relative;
    width: 100%;
    height: 85%;
    overflow: auto;
    padding: 20px 50px;
  }
  .play-content{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 15%;
    background-color: cadetblue;
    .btn{
      width: 100px;
      height: 80px;
      margin-top: 40px;
      background-color: gold;
    }
    .wave{
      margin-top: 100px;
    }
  }
}
</style>

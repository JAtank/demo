/**
* 组件：对话框
*/
<template>
    <div id="dialogue" ref="dialogue">
      <a class="hint" v-text="hint"></a>
      <dialogPeople v-for="item,index in dialog"
                    :isRight="item.isRight"
                    :dialogContent="item.content"
                    v-if="index<=curIndex"
                    ref="people"
                    :key="index">
      </dialogPeople>
    </div>
</template>

<script>
  import dialogPeople from './dialogue-people'
    export default {
      name: "dialogue",
      data(){
        return{
          hint:'这里是提示性语句的位置，请尽量避免财务信息的透露！！！',
          dialog:[
            {
              isRight:0,
              content:"这里是第一句内容，哈哈哈，你好吗"
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
          curIndex:0,
          scrollTop:0,
          time:0
        }
      },
      components:{
        dialogPeople
      },
      created(){
        this.initData();
      },
      methods:{
        initData(){
          this.time = setInterval(()=>{
            if(this.curIndex==this.dialog.length-1){
              clearInterval(this.time);
              return
            }
            this.curIndex++;
            this.$nextTick(()=>{
              this.getPeople();
            });
          },3000)
        },
        getPeople(){ //自动滚动
           let people = this.$refs.people;
           let el = people.pop().$el;
           let dialogue = this.$refs.dialogue;
           this.scrollTop += el.offsetHeight
           dialogue.scrollTop = this.scrollTop;
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
  padding: 50px 0;
  overflow: auto;
  .hint{
    position: absolute;
    display: flex;
    width: 60%;
    background-color: rgba(250,235,215,.4);
    top: 0;
    left: 20%;
    z-index: 20;
  }
}
</style>

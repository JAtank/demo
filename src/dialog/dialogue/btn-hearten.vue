/**
* 组件：按钮-对话鼓励气泡
*/
<template>
  <div id="hearten">
    <svg version="1.1" width="2048" height="1238" xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" r="30" stroke-width="10" stroke="#9932CC" stroke-dasharray="2px,70px" fill="salmon" v-if="showCir1">
        <animate attributeName="r" from="30" to="90" dur="2" fill="freeze"></animate>
        <animateMotion path="M1024,1238 C200,900 728,500 150,200" begin="0s" dur="2s"  calcMode="discrete" fill="freeze"></animateMotion>
      </circle>
      <circle cx="0" cy="0" r="20" stroke-width="2" stroke="#9932CC" fill="salmon" fill-opacity="0.5" v-if="showCir1">
        <animate attributeName="r" from="20" to="80" dur="2" fill="freeze"></animate>
        <animateMotion path="M1024,1238 C200,900 728,500 150,200" begin="0s" dur="2s"  calcMode="discrete" fill="freeze"></animateMotion>
      </circle>

      <circle cx="0" cy="0" r="30" stroke-width="10" stroke="#9932CC" stroke-dasharray="2px,70px" fill="salmon" v-if="showCir2">
        <animate attributeName="r" from="30" to="90" :begin="beginTime" :dur="durTime" fill="freeze"></animate>
        <animateMotion path="M1024,1238 C200,900 300,800 150,500" :begin="beginTime" :dur="durTime"  calcMode="discrete" fill="freeze"></animateMotion>
      </circle>
      <circle cx="0" cy="0" r="20" stroke-width="2" stroke="#9932CC" fill="salmon" fill-opacity="0.5" v-if="showCir2">
        <animate attributeName="r" from="20" to="80" :begin="beginTime" :dur="durTime" fill="freeze"></animate>
        <animateMotion path="M1024,1238 C200,900 300,800 150,500" :begin="beginTime" :dur="durTime"  calcMode="discrete" fill="freeze"></animateMotion>
      </circle>

      <circle cx="0" cy="0" r="30" stroke-width="10" stroke="#9932CC" stroke-dasharray="2px,70px" fill="salmon" v-if="showCir3">
        <animate attributeName="r" from="30" to="90" :begin="beginTime" :dur="durTime" fill="freeze"></animate>
        <animateMotion path="M1024,1238 C200,900 600,500 600,300" :begin="beginTime" :dur="durTime"  calcMode="discrete" fill="freeze"></animateMotion>
      </circle>
      <circle cx="0" cy="0" r="20" stroke-width="2" stroke="#9932CC" fill="salmon" fill-opacity="0.5" v-if="showCir3">
        <animate attributeName="r" from="20" to="80" :begin="beginTime" :dur="durTime" fill="freeze"></animate>
        <animateMotion path="M1024,1238 C200,900 600,500 600,300" :begin="beginTime" :dur="durTime"  calcMode="discrete" fill="freeze"></animateMotion>
      </circle>
<!--      <path transform="" d="M1024,1238 C200,900 728,500 150,200" stroke="black" stroke-width="5" fill="none"/>-->

<!--      <path transform="" d="M1024,1238 C200,900 300,800 150,500" stroke="black" stroke-width="5" fill="none"/>-->

<!--      <path transform="" d="M1024,1238 C200,900 600,500 600,300" stroke="black" stroke-width="5" fill="none"/>-->
    </svg>
  </div>
</template>

<script>
    export default {
      name: "btn-hearten",
      data(){
        return{
          showCir1:true,
          showCir2:false,
          showCir3:false,
          beginTime:1,
          durTime:2
        }
      },
      created(){
        this.timeOut(1000).then(()=>{
          this.timeOut(1000).then(()=>{
            this.showCir1=false
          })
          this.showCir2 = true;
          this.showCir3 = true;
          this.timeOut(2000).then(()=>{
            this.$emit("dismiss");
          })
        })
      },
      methods:{
        timeOut(time){
          return new Promise((resolve, reject)=>{
            setTimeout(()=>{
              resolve();
            },time)
          })
        }
      }
    }
</script>

<style lang="scss" scoped>
  #hearten{
    position: absolute;
    width: 2048px;
    height: 1238px;
  }
</style>

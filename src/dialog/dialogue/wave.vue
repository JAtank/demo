<template>
  <div id="wave">
<!--    <svg version="1.1" width="2048" height="50" xmlns="http://www.w3.org/2000/svg">-->
<!--      <g>-->
<!--        <path transform="" d="M0,0 C512,100 1536,-50 2048,50" stroke="black" stroke-width="5" fill="none">-->
<!--        </path>-->
<!--        <animateTransform attributeName="transform" from="0" to="-1024"-->
<!--                          begin="0" dur="1.5" calcMode="linear" repeatDur="300s" type="translate"></animateTransform>-->
<!--      </g>-->
<!--      <g>-->
<!--        <path transform="" d="M2048,50 C2560,-50 3072,100 3584,0" stroke="black" stroke-width="5" fill="none">-->
<!--        </path>-->
<!--        <animateTransform attributeName="transform" from="0" to="-1024"-->
<!--                          begin="0" dur="1.5" calcMode="linear" repeatDur="300s" type="translate"></animateTransform>-->
<!--      </g>-->
<!--    </svg>-->
    <canvas class="wave-line"  width="2048" height="50" ref="line"></canvas>
  </div>
</template>

<script>
    export default {
      name: "wave",
      created(){
        this.$nextTick(()=>{
          this.getLine();
        });
      },
      methods:{
        getLine(){
          let canvas = this.$refs.line;
          canvas.style="border:1px solid #c3c3c3;";
          let cxt= canvas.getContext("2d");
          cxt.moveTo(2048,25);
          let x = 0;
          let time = setInterval(()=>{
            if(x<2048){
              x++;
              let radians = x/2048 * Math.PI * 2;
              let scale = (Math.sin(radians - Math.PI * 0.5) + 1) * 0.5;
              let y = Math.sin(x * 0.02 +2) * 25 * scale;
              cxt.lineTo(x,y);
              cxt.stroke()
              return;
            }
            clearInterval(time);
          },2);
        },
        // setLine(width){
        //   for(let x = 0;x <width; x++){
        //     let radians = x/width * Math.PI * 2;
        //     let scale = (Math.sin(radians - Math.PI * 0.5) + 1) * 0.5;
        //     let y = Math.sin(x * 0.02 +2) * 50 * scale;
        //   }
        // }
      }
    }
</script>

<style lang="scss" scoped>
#wave{
  /*svg{*/
  /*  background-color: chocolate;*/
  /*}*/
  canvas{
    background-color: chocolate;
  }
}
</style>

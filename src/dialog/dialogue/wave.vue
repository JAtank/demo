<template>
  <div id="wave">
    <canvas class="wave-line"  width="1922" height="70" ref="line"></canvas>
  </div>
</template>

<script>
    export default {
      name: "wave",
      data(){
        return{
          cxt:{},
          a:0,
          screenR:0
        }
      },
      created(){
        this.$nextTick(()=>{
          this.getLine();
        });
      },
      mounted(){
        this.screenR = window.screen.width/2560;
      },
      methods:{
        getLine(){
          let canvas = this.$refs.line;
          canvas.width = 1922;
          canvas.height=70;
          let cxt= canvas.getContext("2d");
          this.cxt = cxt;
          this.animation(canvas);
        },
        animation(canvas){
          cancelAnimationFrame(time);
          let time = requestAnimationFrame(()=>{
            if(this.a>=1922){
              return;
            }
            this.cxt.clearRect(0,0,1922,70);
            let cxt= canvas.getContext("2d");
            this.cxt = cxt;
            this.a+=8;
            this.cxt.lineWidth = 2;
            this.cxt.strokeStyle = "#00dca0";
            this.setLine(cxt,1922,this.a);
            this.cxt.strokeStyle = "#fedc64";
            this.setLine(cxt,1922,this.a-2,33);
            this.cxt.strokeStyle = "#1d61df";
            this.setLine(cxt,1922,this.a-5,20);
            this.animation(canvas);
          });
        },
        setLine(cxt,width,right=0,amp=33){
          cxt.beginPath();
          for(let x = 0;x <width; x+=6){
            let radians = x/width * Math.PI * 2;
            let scale = (Math.sin(radians - Math.PI * 0.5) + 1) * 0.5;
            let y = Math.sin(x * 0.01 +right) * amp * scale;
            cxt.lineTo(x,y+35);
            cxt.stroke()
          }
          cxt.closePath();
        }
      }
    }
</script>

<style lang="scss" scoped>
#wave{
  canvas{
    background-color: #ffffff;
    width: 1922*0.9+px;
    height: 70*0.9+px;
  }
}
</style>

<template>
  <div id="wave2">
    <canvas id="waves"  width="1922" height="70" ref="line"></canvas>
  </div>
</template>

<script>
  import SineWaves from "sine-waves";
    export default {
      name: "wave_2",
      data(){
        return{
          waves:{}
        }
      },
      created(){},
      mounted(){
        this.$nextTick(()=>{
          this.initData();
        });
      },
      methods:{
        initData(){
          let that = this;
          console.log(this.$refs.line)
          console.log(SineWaves)
          this.waves = new SineWaves({
            // Canvas Element
            el: that.$refs.line,
            // General speed of entire wave system
            speed: 8,
            // How many degress should we rotate all of the waves
            rotate: 0,
            // Ease function from left to right
            ease: 'SineInOut',
            // Specific how much the width of the canvas the waves should be
            // This can either be a number or a percent
            waveWidth: '1922',
            // An array of wave options
            waves: [
              {
                timeModifier: 1,   // This is multiplied againse `speed`
                lineWidth: 2,      // Stroke width
                amplitude: -33,    // How tall is the wave
                wavelength: 100,   // How long is the wave
                segmentLength: 5, // How smooth should the line be
                strokeStyle: '#00dca0', // Stroke color and opacity
              },
              {
                timeModifier: .8,
                lineWidth: 2,
                amplitude: -20,
                wavelength: 90,
                segmentLength: 5,
                strokeStyle: '#fedc64'
              },
              {
                timeModifier: 1.3,
                lineWidth: 2,
                amplitude: -30,
                wavelength: 90,
                segmentLength: 5,
                strokeStyle: '#1d61df'
              },

            ]
          });
        }
      }
    }
</script>

<style lang="scss" scoped>
  #wave2{
    canvas{
      background-color: #ffffff;
    }
  }
</style>

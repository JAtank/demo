/**
* 搜寻组件：气泡
*/
<template>
    <div id="bubble">
      <div class="point"
           :class="'point-'+index"
           v-for="index in 5"></div>
      <div class="circle"></div>
    </div>
</template>

<script>
    export default {
        name: "bubble"
    }
</script>

<style  lang="scss" scoped>
#bubble{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  .point{
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: olivedrab;
    border-radius: 50% 50%;
    &.point-1{
      left: 2px;
      bottom: 20px;
    }
    &.point-2{
      left: 30px;
      top: 20px;
    }
    &.point-3{
      left: 25px;
      top: 40px;
    }
    &.point-4{
      right: 8px;
      top: 78px;
    }
    &.point-5{
      right: 10px;
      bottom: 12px;
    }
  }
  .circle{
    width: 150px;
    height: 150px;
    border-radius: 50% 50%;
    border: 2px solid seagreen;
    animation: cir-1 1s;
    animation-fill-mode: forwards;
    @keyframes cir-1 {
      from{
        transform: scale(.7,.7);
      }
      to{
        transform: scale(1,1);
      }
    }
  }
}
</style>

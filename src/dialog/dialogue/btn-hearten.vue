/**
* 组件：按钮-对话鼓励按钮
*/
<template>
  <div id="hearten">
    <svg version="1.1">
      <circle cx="50%" cy="100%" r="20" fill="blue">
        <animate attributeName="r" from="20" to="100" dur="2" fill="freeze"></animate>
        <animateMotion path="m50% 100%  c30% 90% 40% 60% 35% 50% s45% 45% 30% 30%" begin="0" dur="2"></animateMotion>
      </circle>
    </svg>
  </div>
</template>

<script>
    export default {
      name: "btn-hearten"
    }
</script>

<style lang="scss" scoped>
  #hearten{
    position: absolute;
    width: 100%;
    height: 85%;
    svg{
      width: 100%;
      height: 100%;
    }
  }
</style>

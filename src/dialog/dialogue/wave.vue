<template>
  <div id="wave">
    <svg version="1.1" width="2048" height="50" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path transform="" d="M0,0 C512,100 1536,-50 2048,50" stroke="black" stroke-width="5" fill="none">
        </path>
<!--        <animateTransform attributeName="transform" from="0" to="-1024"-->
<!--                          begin="0" dur="1.5" calcMode="linear" repeatDur="300s" type="translate"></animateTransform>-->
      </g>
<!--      <g>-->
<!--        <path transform="" d="M2048,50 C2560,-50 3072,100 3584,0" stroke="black" stroke-width="5" fill="none">-->
<!--        </path>-->
<!--        <animateTransform attributeName="transform" from="0" to="-1024"-->
<!--                          begin="0" dur="1.5" calcMode="linear" repeatDur="300s" type="translate"></animateTransform>-->
<!--      </g>-->
    </svg>
  </div>
</template>

<script>
    export default {
        name: "wave"
    }
</script>

<style lang="scss" scoped>
#wave{
  svg{
    background-color: chocolate;
  }
}
</style>

import Vue from 'vue'
import App from './App.vue'
import Toast from './toast';  //吐司

window.toast = Toast; //为window对象绑定toast方法
window.toastDev = process.env.NODE_ENV === "development" ? Toast : () => {
}; //仅在开发环境弹出的toast

new Vue({
  el: '#app',
  render: h => h(App)
})

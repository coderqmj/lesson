import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

axios({
  // url:'123.207.32.32:8000/api/hy/recommend'
  url:'http://123.207.32.32:8000/home/multidata',
  method:"get"
}).then(res=>{
  console.log(res);
})

//axios并发请求
// axios.all([axios({
//   url:'',
//   params:{
//     type:'sell',
//     page:5
//   }
// }),axios({
//   url:''
// })]).then(results=>{

// })

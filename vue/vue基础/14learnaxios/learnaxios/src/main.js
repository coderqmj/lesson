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

// axios({
//   // url:'123.207.32.32:8000/api/hy/recommend'
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:"get"
// }).then(res=>{
//   console.log(res);
// })
// axios({
//   url:'http://123.207.32.32:8000/home/data?type=sell&page=3',
//   method:'GET'
// }).then(res=>{
//   console.log(res);
// })

//全局配置
// axios.defaults.baseURL='http://123.207.32.32:8000'
// axios.defaults.timeout = 5000

// // axios并发请求
// axios.all([axios({
//   url:'/home/data',
//   params:{
//     type:'sell',
//     page:5
//   }
// }),axios({
//   url:'/home/multidata'
// })]).then(results=>{
//   console.log(results);
// })
// const instance1 = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })

// instance1({
//   url:'/home/multidata',
// }).then(res=>{
//   console.log(res);
// })

// instance1({
//   url:'home/multidata',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res=>{
//   console.log(res);
// })

//封装request模块
import {request} from './network/request'

request({
  url:'/home/multidata'
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })

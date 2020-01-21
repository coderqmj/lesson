<template>
  <div id="app">
    <router-view></router-view>
    <router-link to ='/home' tag="button" replace>首页</router-link>
    <router-link to ='/about' tag="button" replace>关于</router-link>
    <router-link :to="'/user/'+userId" tag="button">用户</router-link>
    <img :src="imgUrl" alt="">
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId:'qiu',
      imgUrl:'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2116010795,2977641293&fm=26&gp=0.jpg'
      }
    }
   
}
</script>

<style>
.active{
  color: #f00
}
</style>

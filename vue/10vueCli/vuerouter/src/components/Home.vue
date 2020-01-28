<template>
  <div id="app">
    <h2>我是首页</h2>
    <p>我是内容</p>
    <router-link to ='/home/news' tag="button" replace>新闻</router-link>
    <router-link to ='/home/message' tag="button" replace>消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  // created(){
  //   document.title='首页'
  //   // console.log("object");
  // }
  data(){
    return{
      path:'/home/news'
    }
  },
  activated(){
    this.$router.push(this.path)
  },
  beforeRouteLeave(to,from,next){
    this.path = this.$route.path
    next()
  }
}
</script>

<style>

</style>
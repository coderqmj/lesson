<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <router-link to ='/home' tag="button" replace>首页</router-link>
    <router-link to ='/about' tag="button" replace>关于</router-link>
    <!-- <router-link :to="'/user/'+userId" tag="button" replace>用户</router-link>
    <router-link :to ="{path:'/profile',query:{name:'qmj',age:'18',height:'188'}}" tag='button' replace >档案</router-link> -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <!-- <router-link to ='/profile' tag='button' replace >档案</router-link> 普通写法 -->
    <!-- <img :src="imgUrl" alt=""> -->
    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>
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
    },
    methods:{
      userClick(){
        this.$router.push('/user/'+this.userId)
      },
      profileClick(){
        this.$router.push({
          path:'/profile',
          query:{
            name:'qmj',
            height:'188',
            age:18
          }
        })
      }
    }
   
}
</script>

<style>
.active{
  color: #f00
}
</style>

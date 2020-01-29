<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item>
        <img slot="item-img" src="./assets/img/tabbar/home.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-img" src="./assets/img/tabbar/home.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-img" src="./assets/img/tabbar/home.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-img" src="./assets/img/tabbar/home.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
  
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/TabBar'
import TabBarItem from './components/TabBarItem'
export default {
  name: 'App',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>
 @import './assets/css/base.css';
</style>

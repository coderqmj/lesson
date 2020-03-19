<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="router"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        transitionName: ''
      }
    },
    // created(){
    //   console.log($router);
    // },
    watch: {
      $route(to, from) {
        // let isBack = this.$router.isBack;
        // if(isBack){
        //   this.transitionName = "slide-right";
        // }else{
        //   this.transitionName = "slide-left"
        // }
        // this.$router.isBack = true;
        //如果to索引大于from索引,判断为前进状态,反之则为后退状态
        if (to.meta.index > from.meta.index) {
          console.log('大于');
          //设置动画名称
          this.transitionName = 'slide-left';
        } else {
          console.log('小鱼');
          this.transitionName = 'slide-right';
        }
      }
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }

  /* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  max-width: 15rem;
  margin: auto;
  position: relative;
} */
  .router {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    /* transition: all 0.377s ease; */
    /* will-change: transform; */
    /* backface-visibility: hidden; */
    /* perspective: 1000; */
  }

  /* .slide-left-enter, .slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%)
}
.slide-left-leave-to, .slide-right-enter {
  opacity: 0;
  transform: translateX(-100%)
}
.slide-left-enter-active, .slide-left-leave-active, .slide-right-enter-active, .slide-right-leave-active {
  transition: 1.5s;
  position: absolute;
  top:0;
} */
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 1s;
    position: absolute;
  }

  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>
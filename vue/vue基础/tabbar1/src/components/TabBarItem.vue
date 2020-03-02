<template>
  <div class="tab-bar-item">
    <div><slot name="item-img"></slot></div>
    <slot name="item-text"></slot>
      
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data () {
    return {
      
    };
  },
  components: {},
  mounted () {},
  methods: {}
}
</script>

<style scoped>
 .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
      height: 24px;
      width: 24px;
      margin-top: 3px;
      vertical-align: middle;
      margin-bottom: 2px;
  }  
  .active{
    color: red
  }  
</style>
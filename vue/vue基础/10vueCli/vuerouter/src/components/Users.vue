<template>
  <div>
      <h2>用户</h2>
      <p>用户名为:{{userId}}</p>
  </div>
</template>

<script>
export default {
    name:'User',
    computed:{
        userId(){
            return this.$route.params.userId
        }
    },
//     created(){
//     document.title='用户'
//     // console.log("object");
//   }
    
}
</script>

<style>

</style>
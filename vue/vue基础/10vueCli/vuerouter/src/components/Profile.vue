<template>
  <div>
      <h2>I'm Profile compontent</h2>
      <p>姓名:{{$route.query.name}} 年龄:{{$route.query.age}} 身高:{{$route.query.height}}</p>
  </div>
</template>

<script>
export default {
  name:'Profile'
  // created(){
  //   document.title='档案'
  //   // console.log("object");
  // }
}
</script>

<style>

</style>
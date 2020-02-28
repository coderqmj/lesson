/**
 * 1.鼠标放入那张图片，那张图就变成了800，其他就变成
 */

 //代码实现
 var li  = document.querySelectorAll(".box li")
 for(var i = 0;i<li.length;i++){

  //鼠标移入变成800
   li[i].onmouseenter = function(){

    //排他 所有都变成800px
    for(var m =0;m<li.length;m++){
      li[m].style.width="100px"
    }
     this.style.width = "800px"
   }

   li[i].onmouseleave = function(){
     for(var n = 0;n<li.length;n++){
      li[n].style.width = "240px"
     }
   }
 }
 console.log('aaa');
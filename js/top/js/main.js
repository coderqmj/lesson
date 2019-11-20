// 思路：

    // 返回顶部，是固定在右下角的某个位置
    // 页面开始的时候，返回顶部不出现，页面滚到一定距离时，才自动出现
    // 点击返回顶部后，页面慢慢的滚动到页面顶部

// 代码实现:

var st = 0;
var back = document.querySelector(".back");
var timer=null;
//监听页面的滚动

window.onscroll = function(){
    //获得页面滚动的距离
    st = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(st)
    if(st>=500){
        // back.style.opacity="1";
        back.classList.add("show");
    }else{
        // back.style.opacity="0";
        back.classList.remove("show")
    }
}

//点击返回顶部
back.onclick = function(){
    // window.scrollTo(0,0); //跳转到指定位置  直接返回顶部，不是慢慢返回
    // 如何慢慢变？
    timer = setInterval(function(){
       
        st-=50;
         //回到顶部需要清除定时器
        if(st==0){
            clearInterval(timer);
        }
        document.documentElement.scrollTop = st;
        document.body.scrollTop = st;
    },30);
}
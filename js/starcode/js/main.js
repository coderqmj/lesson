// 思路：
// 1丶鼠标放到谁上面星星都要亮
// 2丶鼠标点了谁，前面星星都要亮

var li = document.querySelectorAll(".start li");
var start = document.querySelector(".start");
var curIndex = null;

start.onmouseenter = function(){
    curIndex = null;
}

start.onmouseleave = function(){
    if(curIndex===null){ //意思是未被记录到当前星星的下标
        for (var i = 0; i<li.length; i++){ //所有星星都不亮
            li[i].className = "";
        }
    }

    
}

for (var i =0; i<li.length; i++){
    //给每个li都设定了自定义属性
    li[i].setAttribute("data-idx",i)
    //鼠标获取到当前下标
    li[i].onmouseenter = function(){
        //知道到谁了
        //console.log(this.getAttribute("data-idx"))
        var idx = this.getAttribute("data-idx");
        show(idx);
    }

    //星星被点击的时候
    li[i].onclick = function(){
        //知道他点击谁了
        var idx = this.getAttribute("data-idx");
        curIndex = idx;
        show(idx)
        console.log("平分了"+(idx*1+1)+"分")
    }
}
function show(num){
    //所有的都没有亮
    for (var i = 0; i<li.length; i++){
        li[i].className = "";
    }
    //让0到当前都变亮
    for(var j = 0; j<=num;j++){
        li[j].className = "active";
    }
}

// console.log(num+1)
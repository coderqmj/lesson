// 思路：
// 1.左边内部内容滑块可以移动，同时不能超出范围
//    知道鼠标在内部的位置(box和页面的位置，鼠标和页面的范围 求差值)
//    不超出范围
// 2.鼠标移入左边区域，右边显示内容
// 3.鼠标移入坐标区域移动，对应右边内容显示
//  move/show = zoom/big  等比例

//代码实现
//找到DOM节点
var box =document.querySelector(".box");
var show = document.querySelector(".show");
var move = document.querySelector(".move");
var zoom = document.querySelector(".zoom");
var big = document.querySelector(".big");


var showWidth = show.offsetWidth; //获取元素的宽度
var showHeight = show.offsetHeight;


//不能一开始获取宽高 因为display为none所以都为0 
// var moveWidth = move.offsetWidth;
// var moveHeight = move.offsetHeight;
// console.log(boxWidth,boxHeight)
var moveWidth;
var moveHeight
var pixW;
var pixH;

show.onmouseenter = function(ev){
    //显示滑块
    move.style.display = "block";
    //显示右边区域内容
    zoom.style.display = "block";

    //在这里获取宽和高，因为这里已经 block 显示了
    moveWidth = move.offsetWidth;
    moveHeight = move.offsetHeight;

    //zoom的宽高
    var zoomWidth = zoom.offsetWidth;
    var zoomHeight = zoom.offsetHeight;

    //求出宽高的比例 ， 
    pixW = moveWidth/showWidth;
    pixH = moveHeight/showHeight;
    big.style.width = zoomWidth/pixW+"px";
    big.style.height = zoomHeight/pixH+"px"

}
show.onmouseleave = function(){
    //滑块隐藏
    move.style.display = "none";
    //右边隐藏
    zoom.style.display = "none";
}

// show 添加mousermove 事件

show.onmousemove = function(ev){
    // move.style.display = "block";
    var event = ev || window.event;
    //  console.log(event.clientX,event.clientY)
    //  鼠标相对于左上角的位置
     var clX = event.clientX;
     var clY = event.clientY;
     
    //  取得图片的左上角坐标
    // var clX2 = show.offsetLeft;
    // var clY2 = show.offsetTop;
    //上两行取得的坐标是相对于父类的坐标

    // 下面是求box 即 show 的定点坐标
    var clX2 = box.offsetLeft;
    var clY2 = box.offsetTop;
    console.log(clX2,clY2)

    //求鼠标在show区域的偏移
    var lt = clX-clX2;
    var tp = clY-clY2
    console.log(lt,tp)

    //设置move的位置
    //左右边缘处理
    if(lt<=(moveWidth/2)){
        move.style.left = "0px";
    }else if(lt>=(showWidth-moveWidth/2)){
        move.style.left = (showWidth-moveWidth)+"px";//滑块的位置左上角算
    }else{
        move.style.left = lt-(moveWidth/2) + "px";
    }

    //上下边缘处理
    if(tp<=(moveHeight/2)){
        move.style.top = "0px";
    }else if(tp>=(showHeight-moveHeight/2)){
        move.style.top = (showHeight-moveHeight)+"px";//滑块的位置左上角算
    }else{
        move.style.top = tp-(moveHeight/2)+"px";
    }
    
    //右边内容区域显示
    // zoom.style.display = "block" //block 显示
    big.style.left =- parseFloat( move.style.left)/pixW+"px";
    big.style.top =- parseFloat( move.style.top)/pixH +"px";
   

}


// var tl = new TimelineMax({   //TimelineMax线性运动库
//     repeat: -1,
//     yoyo: true,
//     repeatDelay: 1
// })
// var box1 = document.getElementsByTagName("div")
// tl.from(['#box1,#box3'],.3,{x: '-=55%'}); //左边动
// tl.from(['#box2'],.3,{x: '+=55%'}); //右边动  中间的参数代表运动一个完周期的时间

//各个页面id名字不一样 不适格复用
//改善:
var Animation = function(els){ //els 为参数
    var dur = 0.3,
    amount = '55%',
    tl = new TimelineMax({
        repeat: -1, //代表无限循环
        yoyo: true,
        repeatDelay: 1
    });
    tl
    .add(fromLeft([
        els[0],els[2]
    ]))
    .add(fromRight(els[1]))

    function fromLeft(el){
        return TweenMax.from(el, dur , {x:'-='+amount,autoAlpha:.2}) //autoAlpha透明度
    }
    function fromRight(el){
        return TweenMax.from(el, dur , {x:'+='+amount,autoAlpha:.2}) //autoAlpha透明度
    }
}

-   数据可视化
-   使用requestAnimationFrame 请求运动帧
    -   游戏开发中使用这个 代替 setInterval
    -   function animation(){       自己调用自己=递归 

    }
-   canvans 是画布 游戏专用
    -   绘制API 画布的默认大小为300×150
    -   canvas.style.width 比较标准 一定需要单位 vw px 等要表明
    -   canvas.width    html属性 不能用单位 vw px 都不行 已经默认了为px window.innerWidth没有单位
    -   var ctx = canvas.getContext('2d'); 定义一个内容
        ctx.fillStyle = 'red';             内容颜色
        ctx.font="50px Verdana";           内容字体大小和字体样式
        ctx.clearRect(0,0,500,200);        清除指定位置大小的内容
        ctx.fillText(++dis,250,100);       加入内容

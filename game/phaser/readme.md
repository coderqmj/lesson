-   游戏框架 引擎 快速快发游戏
-   精灵 Sprite
-   es6语法点
    es5 js 定义变量 var
    es6 let 定义变量
        const 定义常量
    如果是简单数据类型， const 值无法改变(数值，字符创，布尔型，null，undefined)
    如果是复杂数据类型, {}, [] 值可以改变，不能把它重新整体赋值

    let ? 变量 有块级作用域 { }
-   变量类型由值决定 let a = 1;
-   变量一定有作用域，window 全局， { 块级作用域 } 局部作用域 function fun() { let a = 1;}
    代码块中{let a =1 ;} 外部 a++; 则无法访问到代码块中的a

-   2d游戏开发，网易h5
    网页2d游戏 用的是 canvas
    -   Game对象， 总管
        new Phaser.Game(参数)  Phaser {}
        回调的方式来设置
    -   预加载资源 -> create 创建场景 -> update 更新 每秒60帧
    
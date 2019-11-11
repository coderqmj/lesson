-   界面的宏观视角
    -   结构>组件（cell）
    -   组件: 界面构成的基础，拼积木一样搭页面
-   结构的套路
    -   .weui-cell
        .weui-cell_hd
        .weui-cell_bd
        .weui-cell_ft
        .weui-cell_hd+.weui-cell_bd+.weui-cell_ft
    -   hd + bd + ft
        -   _代表BEM Block Element Modifier

-   研究微信官方前端框架 weui源码
    -   BEM 好用，类名取名的依据
    -   .hd+.bd+.ft 少和业务相关，多一些抽象
    -   弹性布局 移动端常用方式 (align-items:center; 垂直居中) flex:1; 子元素占完，它在占据所有

    

- 页面先写结构
  类名（需要语义化）  .key>   .sound 一个盒子
  结构从外到内
  Ctrl+/ 注释
  良好的结构是界面的基础
- 写结构时不用考虑样式 （先建毛坯房再装修）
- 样式
  - 块级元素 block
    行内元素？
  - 弹性布局 
    display: flex; 
    所有子元素的块级元素被干掉 同一行上
    min-hight:100vh; 相对高度  自己的高度就为100vh
    justify-content: center;
    align-items: center;
  - html 默认的字体为16px
    rem 和 vh 都是相对单位
    rem是相对html的字体大小
    0.4rem = 16px * 0.4=6.389px
    为什么不直接用px？ 在手机端 px 不准确 但rem适用所有手机
  - 盒子模型
    margin + border +padding + content
  

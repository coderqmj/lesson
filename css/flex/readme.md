### 一.flex布局初识
- 1.flex-container
  包含各个小块的容器
- 2.flex-item
  容器里面的各个小块
- 3.css设置
  给容器设置 display:flex


### 二.flex布局模型
- 1.**mian axis** 主轴是横轴
- 2.**main start** 和 **main end** 分别代表主轴的开始和结束
- 3.**cross axis** 交叉轴是向下的竖轴
- 4.**cross start** **cross end** 分别代表 交叉轴的开始和结束

### 三.flex的属性
#### 1.flex-direction

- 作用：决定主轴的方向

- `flex-direction`默认值为:row从左向右
- `flex-direction: row-reverse`; 反向排列，从右到左 
- `flex-direction: column`从上到下

#### 2.justify-conten 
- **作用**:决定items在main aixs对齐方式
- **默认值**:`flex-start` 开始的方向对齐
- `flex-end`在末端对齐
- `justify-content: center;`可以使其居中对齐
  - ![1584507731682](C:\Users\邱\AppData\Roaming\Typora\typora-user-images\1584507731682.png)



- ` justify-content: space-between;` 左右贴紧 中间等分
  - ![1584508026825](C:\Users\邱\AppData\Roaming\Typora\typora-user-images\1584508026825.png)
- `justify-content: space-evenly;` 等分 **开发中最常用**
- ``justify-content: space-around`

#### 3.align-items

- **作用**：决定了`flex items`在水平方向上的对齐方式 
- normal：在弹性布局中，效果和stretch一样
- stretch：当flex items 在 cross axis方向上为auto 是时，会自动拉伸填充flex container
- flex-start：与cross start 对齐
- flex-end 与cross end 对齐
- center： 居中对齐
- baseline：与基准线对齐

#### 4.flex-wrap

- 原因：默认情况下，所有的item都在一行显示，放不下时item的宽度会被压缩
- `flex-wrap:nowrap`:不换行显示
- `flex-wrap:wrap `: 可以换行
- ![1584527157158](C:\Users\邱\AppData\Roaming\Typora\typora-user-images\1584527157158.png)

#### 5.align-content

- **作用**：`align-content `决定了多行`flex items`在`cross axis`**竖的**上的对齐方式,用法与`justify-content`类似
- **使用**：在多行 **flex**使用
- `stretch`( 默认值) :与`align-items`的`stretch`类似
- `flex-start/end/center` :与`cross start/end/居中` 对齐
  - ![1584528987203](C:\Users\邱\AppData\Roaming\Typora\typora-user-images\1584528987203.png)
- `space-between `:
  - `flex items`之间的距离相等
  - 与`cross start`、 `cross end`两端对齐
- `space-around `:
  -  `flex items`之间的距离相等
  -  `flex items`与`cross start`、`cross end`之间的距离是`flex items`之间距离的一半
- `space-evenly `:
  - `flex items`之间的距离相等
  - `flex items`与`cross start`、`cross end`之间的距离等于`flex items`之间的距离


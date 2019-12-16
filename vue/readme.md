el:'#app' 用于挂载要管理的元素 是一个 id 名
以前的 js(编程范式：命令式)
vue:声明式
优点：数据和界面分离 处理数据方便
li v-for="item in movies">{{item}}</li> 遍历 movies
函数再 methods 中定义 methods:{ functionName:function(){} }
MVVM: Model View=DOM
console.log 快捷键 clg
function 快捷键

- {{}}Mustache 语法 胡子语法
  可以写简单的表达式 + - \* /
  不可再<>内使用 <>这里使用<>
- v-html
    <h2 v-html="url"></h2> 会把url解析出来显示文字链接<a></a>
- v-bind 动态绑定
  v-bind:src="imgSrc" 去 data 里找 imgUrl 显示出来
  语法糖(简写): v-bind:==: 即可
  属性名: 属性值 不加引号代表是 data 取出的，加‘’代表是他的值
- 监听事件
  v-on:click="函数名"
- 计算属性 
    在computed中定义函数  getFullName: fucntion(){} 和methods中不同的是调用不用加()直接写 getFullName
    取名一般不写动词，写属性
    get function 一般是返回值
    一般没有set方法 ,只读属性

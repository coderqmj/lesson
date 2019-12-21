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
  v-on:click="函数名" 简写为 @click="函数名"
- 计算属性
  在 computed 中定义函数 getFullName: fucntion(){} 和 methods 中不同的是调用不用加()直接写 getFullName
  取名一般不写动词，写属性
  get function 一般是返回值
  一般没有 set 方法 ,只读属性
  computed 比 methods 性能好 会放入内存中 数据修改? 调用:不调用 而 methods 内次都会调用函数 cha
- v-for
  插入数值的时候 绑定 :key 性能好 是直接插入的 而不是 一个个往后赋值
  绑定的 keyitem 相同
- 哪些方法是响应式的
  push
  pop 删除最后一个元素
  unshift 加到最前面
  shift 加到最后面
  splice() 删除:第一个参数表第几个开始,第二个参数代表删除几个元素/插入/替换 splice(1,3,)
- 过滤器 filters 在这里面写个函数修正小数点保留问题 {{item.price | showPrice}}
- 过滤函数 let newNums = nums.filter(function(n){ 返回 true 则加入到数组，反之 参数 n 为传来的数组
  return n<100
  })
- map 函数 let newNums1 = newNums.map(function(n){ 返回的值放入新的数组中 参数 n 为传进来的数组
  return n*2
  })
- reduce 对函数进行汇总 let sum = newNums1.reduce(function(previousValuse,n){
  return previousValuse + n //第一个参数是先前 return 的值(0 为默认第一个 return 的值) n 为传进来的值
  },0)
- v-model 双向绑定 与表单一起使用 响应式
  可以进行双向修改 ，input 修改可以使 data 里面改变
  event.target.value
  复选框选中就会将 value值传给data里面 单选框也是
  失去焦点时才改变，或者回车才改变 v-model.lazy就行了
- 表单中radio name 一样才能互斥 或者 v-model绑定的一样

- 组件化的使用
    1.创建组件构造器对象->2.注册组件->3.使用
    .2.
  失去焦点时才改变，或者回车才改变 v-model.lazy就行了
- 表单中radio name 一样才能互斥 或者 v-model绑定的一样

- 组件化的使用
    1.创建组件构造器对象->2.注册组件->3.使用
    2.组件化使用 const app 要在组件化定义创建下面才有用

    
    3.Vue.component('cpn','cpnC')全局注册 只要是Vue的实例就可以使用app app1等
    4.局部注册: 在对应的app里components里面注册: cpn:cpnC
    5.父子组件注册:在父 const cpnC = Vue.extend 下 components:{ cpn1:cpnC1}
    6.子组件放入父组件必须先定义好
- 组件内的{{}}
    1.不可以访问Vue实例的data
    2.访问数据需要在Vue.component('cpn',{template:'#cpn',data(){return{title:'标题'}}})
    3.data() 使用函数的时候每次创建都是一个不同的对象，不会共用数据 每次创建都是独立的


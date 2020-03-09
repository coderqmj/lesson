### 一.设置中文

#### 1.普通文本

~~~ javascript
response.setHeader('Content-type','text/plain;charest=utf-8')
~~~

#### 2.HTML文本

~~~ javascript
response.setHeader('Content-type','text/html;charest=utf-8')
~~~

### 二.模块

#### 1.模块系统

- 在 `Node` 中没有全局作用域的概念
- 在 `Node` 中，只能通过 **require** 方法来加载执行多个JavaScript脚本文件
- **require** 加载只能是执行其中的代码，文件源文件之间是由于模块模块作用域，所以不会有污染的问题
  - 模块完全是封闭的
  - 外部无法访问内部
  - 内部也无法访问内部

#### 2.核心模块

- 核心模块式由node提供的一个个具名模块，都有自己的特殊标识 `fs`,`http`

- ~~~javascript
  var fs = require('fs')
  ~~~

- 
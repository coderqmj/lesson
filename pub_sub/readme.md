- 事件监听 执行逻辑
  浏览器 chrome.exe 进程
  js 是 Chrome 里的语言编译器来执行的
  html 和 css DOM 树
  js 执行 脚本 事件是异步的
- 注册事件
  js 为单线程语言 onload
  轮循注册时间的地方
  订阅发布者模式
- listen 添加订阅者
  saleOffice.clientList.push(fn);
- saleOffice 发布者
  trigger 有事通知
  把所有订阅者都执行一次
- apply 函数运行除外，指定其this指向 arguments 
发布者 document.body 有订阅者 fn
document.body.events= [] 事件池
click trigger
   event.each(fn)

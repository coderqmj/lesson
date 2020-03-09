var http  = require('http')

//1.创建Server
var server = http.createServer()

//2.监听Server的请求事件，设置请求处理函数
// 请求 处理 响应 
// 一个请求对应一个响应，如果一个请求的过程中，已经响应结束了，则不能重复发送响应，没有请求就没有响应

server.on('request',function(req,res){
  var url = req.url
  if(url==='/'){
    res.end("hello")
  }else{
    res.end("404 NOT FOUND")
  }
})

//3.绑定端口号，启动服务
server.listen(3000,function(){
  console.log('running...');
})
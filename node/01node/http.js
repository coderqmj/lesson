//1.加载 http 核心模块
const http = require('http')

//2.使用http.createServer 创建一个 Web服务器

//返回一个server实例
const server = http.createServer()

//3.服务器的发送请求，接受请求，请求处理，发送响应
//resopnse有一个对象write方法，可以给客户端发送响应数据
//write可以多次使用但是结束时要记得用end结束响应，否则客户端会一直等待

server.on('request', (request, response) => {
  console.log('收到客户端的请求,请求路径是:' + request.url);
  // if (request.url === '/') {response.end("index page")}
  // else if (request.url === '/china') {response.end("china")}
  // else  { response.end('404 NOT FOUND') }

  if(request.url === '/goods'){
    var goods = [
      {
        name:'苹果',
        price:5999
      },
      {
        name:'三星',
        price:2000
      },
      {
        name:'小米',
        price:1999
      }
    ]
    response.end(JSON.stringify(goods))
  }
    
})

//4.绑定端口号，启动服务器
server.listen(3000, () => {
  console.log('服务器已启动,可以通过 http://127.0.0.1:3000/ 来进行访问');
})
const fs = require('fs')
const http = require('http')

const server = http.createServer()


server.on('request', (request, response) => {
  console.log('收到客户端的请求,请求路径是:' + request.url);
  if(request.url === '/'){
    fs.readFile('./index.html',(err,res)=>{
      if(err){
        response.setHeader('Content-type','text/plain;charest=utf-8')
        response.end('请求页面失败')
      }else{
        response.setHeader('Content-type','text/html;charest=utf-8')
        response.end(res)
      }
      
    })
  }
})

//4.绑定端口号，启动服务器
server.listen(3000, () => {
  console.log('服务器已启动,可以通过 http://127.0.0.1:3000/ 来进行访问');
})
const http = require('http');
const redis = require('redis');
const client = redis.createClient(6379,'192.168.31.128');

// let api_limit = 10;
client.set("qiu_key",10,function(err,obj){
    console.log(obj)
})
http.createServer((req,res)=>{
    
    // if(req.url.indexOf('/api')>= 0){
    if(/^\/api/.test(req.url)){
        client.get("qiu_key",function(err,count){
            
        
         //响应头 状态码 StatusCode
        res.writeHead(200,{
            'Content-Type': 'text/json;charset=utf-8' //设为中文  200代表成功
        });
        
        if(api_limit>=0){
        //在网页输出下面的
        res.end(JSON.stringify({    
            //res 用户访问的响应 响应体
            name: 'qiu',
            count:`您拥有${count}次调用权`
        })) //jason 字符串化
        // api_limit --;
    }else{
        res.end(JSON.stringify({
            mag: '没有调用权'
        }))
    }})
}
})
.listen(7001) //在7001端口上创建服务器
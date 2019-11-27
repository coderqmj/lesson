const redis = require('redis');
const client = redis.createClient(6379,'192.168.31.128');//创建客户端 用6379端口 在IP地址上
    // Key:value
// client.set('hello',5,function(err,obj){
//     console.log(obj);
// })
// client.set('hello',5,function(err,obj){
//     console.log(obj);
// })
client.incr('hello',function(err,data){
    console.log(data);
})

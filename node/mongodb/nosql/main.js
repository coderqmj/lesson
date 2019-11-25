// var express = require('express')//node 开发框架
// //异步无柱塞 node 可以支持更高的并发

// //启动一个webapp
// const app = express();
// app.get('/',(req,res)=>res.send('hello world'))
// app.listen(3000,()=>console.log('Example app listening on port 3000!'));
var express = require('express');
const ejs = require('ejs'); //! 模板引擎
const app = express();
app.get('/',(req,res)=>{
    ejs.renderFile("view/index.html",{
        title:'hello'
    },function(err,data){
        res.end(data);
    })
    
})
app.listen(3000); //!监听端口3000
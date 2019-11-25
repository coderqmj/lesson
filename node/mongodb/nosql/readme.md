-   NOSQL
-   MySQL是关系数据库 database->table->fields
    -   tables;
-   NOSQL
    -   无需写sql
    -   json object{} .save()
    -   db.orders.find({})
    -   适用于碎片化，结构不是很良好的数据存储
-   Mongodb 云开发数据库就是线上版的 语句简单
    -   1.文档型
    -   2.collections(表，集合)
    -   3.面向js语言使用
-   连接MongoDB
    -   1.url mongodb://
-   创建数据库
    -   db.createCollection('site'，
        function(err,res){
            //err 出错
            //js异步的,耗时的,
            //js代码执行不会阻塞
        }
    )

-   数据库,后端开发框架 
-   express node 后端就是一个app
-   app.get('/',(req,res)=>res.send('hello world'))  请求响应 res=响应
-   app.listen(3000,()=>console.log('Example app listening on port 3000!'))
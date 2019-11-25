var express = require('express');
const ejs = require('ejs'); //! 模板引擎
//mongodb 驱动 mysql
var MongoClient = require('mongodb').MongoClient;
//mongodb 连接是用mongodb://协议夹  27017端口
//mysql:3306
var url = 'mongodb://192.168.31.128:27017/runoob';
MongoClient.connect(url,{
    useNewUrlParser:true
},function(err,db){
    if(err){
        throw err;
    }
    // console.log('数据库已创建');
    var dbbase = db.db("runoob");
    //查询数据库是异步?回调方案
    // dbbase.createCollection('qiu_site',function(err,res){
    //     //回调先处理错误
    //     if(err){
    //         throw err;
    //     }
    //     console.log('创建了集合');
    //     db.close();
    // })
    // db.close();该语句要放入上面，因为js语句是异步的，上面没执行完就把db关了.

    //json object
    // var myObj = {name: '潘志伟',
    // url: 'www.runoob'};
    // dbbase
    //     .collection("qiu_site")
    //     .insertOne(myObj,function(err,res){
    //         if(err){
    //             throw err;
    //         }
    //         console.log('文档插入成功！');
    //         db.close();
    //     })
    dbbase.collection("qiu_site")
        .find({"name":"潘志伟"})
        .toArray(function(err,result){
            if(err) throw err;
            console.log(result);
            db.close();
        })
})
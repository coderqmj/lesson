// const express = require("express"); //node 的开发框架

// const path = require('path');
// const bodyParser = require('body-parser'); //解析表单 需要安装


// //连接数据库
// const MongoClient = require('mongodb').MongoClient;   //存储店铺信息
// const ObjectID = require('mongodb').ObjectID; //从mongodb中拿到 id
// const url = 'mongodb://192.168.31.129:27017/meituan';
// let dbo;
// MongoClient.connect(url,{
//     useNewUrlParser:true
// },function(err,db){
//     if(err){
//         console.log(err);
//     }
//     dbo = db;
//     console.log('数据库连接成功');
// })

// const app = express();
// app.set('views',path.join(__dirname,'views'));
// app.set('view engine','ejs');


// //用下面的才能取到POST的数据
// app.use(bodyParser.urlencoded({
//     extended:false
// }));
// app.use(bodyParser.json({}))

// app.get('/',function(req,res){
//     res.send({
//         code:0,
//         message: 'hello world'
//     })
// }) //
// app.get('/restaurant/:restaurant_id',(req,res)=>{
//     let restaurant_id = req.params.restaurant_id;
//     let dbObject = dbo.db("meituan");
//     dbObject.collection("restaurant").find({
//         _id: ObjectID(restaurant_id)
//     })
//     .toArray((err,result)=>{
//         res.send({
//             msg:'OK',
//             data: result[0]
//         })
//         res.render('index',{
//             restaurant: result[0]
//         })
//     })
//     // res.send({
//     //     msg:'OK',
//     //     id:restaurant_id
//     // })
// })

// app.post('/restaurant',(req,res)=>{
//     console.log(req.body);
//     let dbObject = dbo.db("meituan");
//     dbObject.collection("resaurant")   
//         .insertOne(req.body,(req,result)=>{
//             console.log(result.insertedId);
//         })     //这个集合类似于sql的table
//     //拿到用户填写的表单信息在req.body
//     res.send({
//         code:0,
//         data: req.body
//     })
// })
// app.listen(7000);
// const express = require('express'); // node 的开发框架
// const path = require('path');
// const bodyParser = require('body-parser');
// // 连数据库
// const MongoClient = require('mongodb').MongoClient;
// const ObjectID = require('mongodb').ObjectID;
// const url = 'mongodb://192.168.31.129:27017/meituan';
// let dbo;
// MongoClient.connect(url, {
//   useNewUrlParser: true
// }, function(err, db) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   dbo = db;
//   console.log('数据库连接成功');
// })
// const app = express();
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({
//   extended: false
// }));
// app.use(bodyParser.json({}))

// app.get('/', function(req, res) {

//   res.send({
//     code: 0,
//     message: 'hello world'
//   })
// })
// app.get('/restaurant/:restaurant_id', (req, res) => {
//   let restaurant_id = req.params.restaurant_id
//   let dbObject = dbo.db("meituan");
//   dbObject
//     .collection("restaurant")
//     .find({
//       _id: ObjectID(restaurant_id)
//     }, {projection: {name: 1}})
//     .toArray((err, result) => {
      
//       // res.send({
//       //   msg: 'OK',
//       //   data: result[0]
//       // })
//       res.render('index', {
//         restaurant: result[0]
//       })

//     })
  
// })

// app.post('/restaurant', (req, res) => {
//   console.log(req.body);
//   let dbObject = dbo.db("meituan");
//   dbObject
//     .collection("restaurant")
//     .insertOne(req.body, (req, result) => {
//       console.log(result.insertedId);
//     })
//   // 填的表单？ req.body
//   res.send({
//     code: 0,
//     data: req.body
//   })
// })
// app.listen(7000);
const express = require("express"); //node 的开发框架

const bodyParser = require('body-parser'); //解析表单 需要安装
//连接数据库
let dbo;
const path = require('path')
const ObjectID =require('mongodb').ObjectID;
const MongoClient = require('mongodb').MongoClient;   //存储店铺信息
const url = 'mongodb://192.168.31.129:27017/meituan';
MongoClient.connect(url,{
    useNewUrlParser:true
},function(err,db){
    if(err){
        console.log(err);
        return;
    }
    dbo = db;
    console.log('数据库连接成功');
})

const app = express();
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')
;app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json({}))

app.get('/',function(req,res){
    res.send({
        code:0,
        message: 'hello world'
    })
}) //
app.get('/restaurant/:restaurant_id',(req,res)=>{
    let restaurant_id = req.params.restaurant_id;
    let dbObject = dbo.db("meituan");
    dbObject
    .collection("restaurant").find({
        _id:ObjectID(restaurant_id)
    })
    .toArray((err,result)=>{
        // res.send({
        //     msg:'ok',
        //     data:result[0]
        // })
        res.render('index',{
            restaurant:result[0]
        })
    })
    // res.send({
    //     msg:'OK',
    //     id:restaurant_id
    // })
})

app.post('/restaurant',(req,res)=>{
    console.log(req.body);
    let dbObject = dbo.db("meituan");
    dbObject
    .collection("restaurant")
    .insertOne(req.body,(req,result)=>{
        console.log(result.insertedId);
    })
    //拿到用户填写的表单信息在req.body
    res.send({
        code:0,
        data: req.body
    })
})
app.listen(7000);

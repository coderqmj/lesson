const mongoose = require('mongoose'), //数据库驱动
    Schema = mongoose.Schema;
// 数据结构
const articleSchema = new Schema({
    title: String,
    date: Date,
    content: String
});
const linkSchema = new Schema({
    name: String,
    href: String,
    newPage: Boolean

})
const userSchema = new Schema({
    name: String,
    password: String,
    email: String,
    emailCode: String,
    createdTime: Number,
    links: [linkSchema]
})

const User = mongoose.model('User', userSchema);
// 最消耗性能的 IO开销
mongoose.connect('mongodb://192.168.31.128:27017/test');
let db = mongoose.connection;
db.on('error', function() {
    console.log('数据库连接失败');
});
db.once('open', function() {
    console.log('db opened');
});
// new User({
//     name: '邱模建',
//     password: '123456',
//     email: '1732935973@qq.com',
//     emailCode: '12345',
//     createdTime: Date.now(),
//     articles: []
// }).save(function(err) {

// })
// User.findOne({ name: '邱模建' }, function(err, doc) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(doc);
// })
// })
// User.findOne({ name: '邱模建' }, function(err, doc) {
//     if (doc) {
//         const article = {
//             title: '你不知道的JavaScript',
//             date: new Date(),
//             content: '一本好书'
//         };
//         doc.articles.push(article);
//         doc.save(function(err) {
//             if (err) return console.log(err);
//             console.log("ok");
//         })
//     }
//     console.log(doc);
// })

User.findOne({ name: '邱模建' }, function(err, doc) {
    if (err) {
        return console.log(err);
    } else if (doc) {
        const link = {
            name: '百度',
            href: 'www.baidu.com',
            newPage: true
        }
        doc.links = [];
        doc.links.push(link);
        doc.save(function(err) {
            if (err) return console.log(err);
            console.log("ok", doc);
        })
    }
})
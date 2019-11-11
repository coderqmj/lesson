// 图片base64编码调用接口
var fs = require('fs');
var bitmap = fs.readFileSync('./sex.png').toString("base64");
// var base64Img = new Buffer(bitmap).toString('base64');
// const image = fs.readFileSync('./bsj.png').toString("base64");

var AipContentCensorClient = require("baidu-aip-sdk").contentCensor;


var APP_ID = "17720585";
var API_KEY = "bFVhDK8hGDU1jXiGELu4rapp";
var SECRET_KEY = "ST6aFW2Dh7sXLxTuWZSc5ZOR7wU3GTpb";


var client = new AipContentCensorClient(APP_ID, API_KEY, SECRET_KEY);
// 图片base64编码调用接口
client.imageCensorUserDefined(bitmap, 'base64').then(function(data) {
    console.log('<imageCensorUserDefined>: ' + JSON.stringify(data));
}, function(e) {
    console.log(e)
});

// 远程图片url调用接口
// client.imageCensorUserDefined("http://image.com/image.jpg", 'url').then(function(data) {
//     console.log('<imageCensorUserDefined>: ' + JSON.stringify(data));
// }, function(e) {
//     console.log(e)
// });
// var fs = require('fs');

// var image = fs.readFileSync("./sfzback.jpg").toString("base64").toString("base64");
// var idCardSide = "back";


// var AipContentCensorClient = require("baidu-aip-sdk").ocr;


// var APP_ID = "17712424";
// var API_KEY = "3SqNtEGWxqWUeswyQEZlnRHG";
// var SECRET_KEY = "E5fzy4GheiRjRZcVQ7oC90KKlKCzIfGE";


// var client = new AipContentCensorClient(APP_ID, API_KEY, SECRET_KEY);



// //调用身份证识别
// client.idcard(image, idCardSide).then(function(result) {
//     console.log(result);
// }).catch(function(err) {
//     // 如果发生网络错误
//     console.log(err);
// });

var fs = require('fs');

var image = fs.readFileSync("./sfz.jpg").toString("base64");
var image1 = fs.readFileSync("./sfzback.jpg").toString("base64");
var idCardSide = "front";


var AipContentCensorClient = require("baidu-aip-sdk").ocr;


var APP_ID = "17712424";
var API_KEY = "3SqNtEGWxqWUeswyQEZlnRHG";
var SECRET_KEY = "E5fzy4GheiRjRZcVQ7oC90KKlKCzIfGE";


var client = new AipContentCensorClient(APP_ID, API_KEY, SECRET_KEY);



//调用身份证识别
client.idcard(image, idCardSide).then(function(result) {
    console.log(result);
}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});
//调用身份证识别
client.idcard(image1, "back").then(function(result) {
    console.log(result);
}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});







// 如果有可选参数
// var options = {};
// options["detect_direction"] = "true";
// options["detect_risk"] = "false";

// // 带参数调用身份证识别
// client.idcard(image, idCardSide, options).then(function(result) {
//     console.log(JSON.stringify(result));
// }).catch(function(err) {
//     // 如果发生网络错误
//     console.log(err);
// });;
const url = require('url')
 
var obj=url.parse('https://www.bilibili.com/video/av27670326?p=31',true)
console.log(obj.query);
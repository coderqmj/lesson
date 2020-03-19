var http = require('http');
var url = "http://sports.sina.com.cn/nba/1.shtml"
http.get(url,function(res,err){
  var html="";
  res.setEncoding("utf-8")       //设置数据编码
  res.on("data",function(chunk){
    html += chunk
  })
  res.on("end",function(){
    console.log(html);
  })
})
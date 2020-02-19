const fs = require('fs')
const os = require('os')
//1.读文件 错误参数在前面
// fs.readFile('./helloWorld.txt',(err,data)=>{
//   if(err) console.log('读取文件失败!');
//   else console.log(data.toString());
// })

//2.写文件 路径 内容 回调
// fs.writeFile("./你好.md","这里是node.js",err=>{
//   console.log("err");
// })
// console.log(os.cpus());
console.log(os.totalmem());


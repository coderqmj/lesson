let fs = require('fs')

let fd =fs.openSync('hello.txt',"r")
console.log(fd);

var buf = Buffer.alloc(20) //开辟一个空间
let content = fs.readFileSync(fd)

console.log(content);
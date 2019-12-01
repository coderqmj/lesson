const fs = require('fs');
// fs.readFile('./d.txt',function(err,res){
//     if(err){
//         console.log(err);
//         return;
//     }else{ console.log(res.toString());}
   
// })
// Buffer 是数据流
function readFile(){
    //先a,b,c依次读取
    const aFile = fs.readFileSync('a.txt'); //使操作同步readFileSync
    console.log(aFile.toString());
    const bFile = fs.readFileSync('b.txt');
    console.log(bFile.toString());
    const cFile = fs.readFileSync('c.txt');
    console.log(cFile.toString());
}
readFile();
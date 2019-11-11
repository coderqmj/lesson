//fs=filesystem
const fs = require('fs'); //读取文件  fs是node内置模块
//分类客户端
const AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;  //图片识别

//同步
const image = fs.readFileSync('./bsj.png').toString("base64");
//console.log(image);
const client = new AipImageClassifyClient('17711745', '2OxU4eGCDB5lhyFYWe1whPVA', 'RhDvKOe2jpiB1b2uryWKMjtbtnuIgzaZ');

//const client = new AipImageClassifyClient('17711745', '2OxU4eGCDB5lhyFYWe1whPVA', 'RhDvKOe2jpiB1b2uryWKMjtbtnuIgzaZ');

client
    .carDetect(image)
    .then(function(result){
        console.log(result);
    })

//读取的文件在磁盘里 js在内存里运行 读取文件内存从磁盘读取文件到内存(I/O操作)
// fs.readFile('./text123.text',function(err,data){ //function是回调函数
//     if(err){
//        // console.log('读取文件失败');
//        return console.error(err);
//     }
//     console.log(data.toString());
// });

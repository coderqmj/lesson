const fs = require('fs')

fs.readdir("./www",(err,files)=>{
  if(err){
    return console.log('页面不存在');
  }
  console.log(files);
})
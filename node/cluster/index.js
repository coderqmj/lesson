const cluster = require('cluster') //多进程
const os = require('os');
// console.log(os.cpus().length);//打印cup核数 4核

if(cluster.isMaster){
    for(let i = 0;i<os.cpus().length/2;i++){ //用一半的核
        //不做具体执行
        cluster.fork();
    }
}else{
    require('./app');
}
//主进程
const cp =require('child_process'); //创建子线程
const child_process = cp.fork(__dirname+'/child.js');//挂起新的进程，启动子进程
child_process.send('哈哈哈'); 
child_process.on('message',(str)=>{
    console.log('parent'+str);
})
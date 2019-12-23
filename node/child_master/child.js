//process node 进程全局对象
process.on('message',(str)=>{
   console.log("child"+str); 
   //子进程可以去另外一个CPU挂载一个进程 多核能力运用起来
   process.send("吃了吗？")
})
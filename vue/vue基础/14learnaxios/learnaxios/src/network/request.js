import axios from 'axios'


//封装起来的优点，当网络请求框架不再维护时，可以不用更换大量代码
export function request(config,success,failure){
  //创建axios实例

  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  //拦截器
  instance.interceptors.request.use(config=>{
    console.log(config);
    // return config
  },err=>{
    console.log(err);
  })

  //发送真正的网络请求
  return instance(config) //本来返回的就是一个promis所以无需new一个

}

// export function request(config,success,failure){
//   //创建axios实例
//  return new Promise((resolve,reject)=>{
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })

//   //发送真正的网络请求
//   instance(config)
//     .then(res=>{
//       // console.log(res);
//       resolve(res)
//     })
//     .catch(err=>{
//       // console.log(err);
//       reject(err)
//     })
//  })
// }
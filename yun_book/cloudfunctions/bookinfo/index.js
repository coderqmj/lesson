// 云函数入口文件
var cloud = require('wx-server-sdk'); //云服务器

var rp = require('request-promise');  // npm 向API发出请求

cloud.init();

exports.main = async(event,context) => {
  console.log(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=6f60c160b00d65d4388606de4b9f4fd5`);
  var res = rp(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=6f60c160b00d65d4388606de4b9f4fd5`).then(html =>{
    return html;
  })
  return res;
}


// cloud.init()

// // 云函数入口函数
// exports.main = async (event, context) => {
//   const wxContext = cloud.getWXContext()

//   return {
//     event,
//     openid: wxContext.OPENID,
//     appid: wxContext.APPID,
//     unionid: wxContext.UNIONID,
//   }
// }
//npm install request-promise
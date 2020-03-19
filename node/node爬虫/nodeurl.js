let url = require('url')
let httpUrl = "https://sale.vmall.com/hwmate.html?cid=10618"
let urlObj = url.parse(httpUrl)
// console.log(urlObj);

let targetUrl = "http://taobao.com/"
httpUrl = "./xdm/qianduan/hello.html"
let newUrl = url.resolve(targetUrl,httpUrl)
console.log(newUrl);
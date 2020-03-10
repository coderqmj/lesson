const fs = require('fs')
const http = require('http')

http
  .createServer((req, res) => {
    // res.end("hello")
    var url = req.url
    if (url === '/' || url==='/html') {
      fs.readFile("./views/index.html", (err, data) => {
        if (err) {
          return res.end('404 Not Found')
        }
        res.end(data)
      })
    } else if (url === '/post') {
      fs.readFile('./views/post.html',(err,data)=>{
        if(err){
          return res.end('404')
        }
        res.end(data)
      })
    }
    else if (url.indexOf('/public/') === 0) {
      fs.readFile('.' + url, (err, data) => {
        if (err) {
          return res.end('404')
        }
        res.end(data)
      })
    }
  })
  .listen(3000, () => {
    console.log('running...');
  })
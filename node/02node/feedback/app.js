const fs = require('fs')
const http = require('http')
const template = require('art-template')
const url = require('url')

var comments = [
  {
    name: '邱',
    content: '你好',
    time: '2020-03-04'
  },
  {
    name: '邱1',
    content: '你好',
    time: '2020-03-04'
  },
  {
    name: '邱2',
    content: '你好',
    time: '2020-03-04'
  },
  {
    name: '邱3',
    content: '你好',
    time: '2020-03-04'
  },
  {
    name: '邱4',
    content: '你好',
    time: '2020-03-04'
  },
]

http
  .createServer((req, res) => {
    var parseObj = url.parse(req.url, true)
    var pathName = parseObj.pathname
    // res.end("hello")
    // var url = req.url
    if (pathName === '/' || pathName === '/html') {
      fs.readFile("./views/index.html", (err, data) => {
        if (err) {
          return res.end('404 Not Found')
        }
        var html = template.render(data.toString(), {
          comments: comments
        })
        res.end(html)
      })
    } else if (pathName === '/post') {
      fs.readFile('./views/post.html', (err, data) => {
        if (err) {
          return res.end('404')
        }
        res.end(data)
      })
    }
    else if (pathName.indexOf('/public/') === 0) {
      fs.readFile('.' + pathName, (err, data) => {
        if (err) {
          return res.end('404')
        }
        res.end(data)
      })
    } else if (pathName === '/comment') {
      // console.log('收到',parseObj.query);
      // res.end(JSON.stringify(parseObj.query))
      var comment = parseObj.query
      comment.time = "2020-03-13 13:50:19"
      comments.push(comment)

      res.statusCode = 302
      res.setHeader('Location','/')

      res.end()
    }
  })
  .listen(3000, () => {
    console.log('running...');
  })
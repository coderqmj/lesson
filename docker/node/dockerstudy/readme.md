- Koa 流行的 node 轻量级框架
  egg 也是基于 koa 的二次开发
- koa new ->app -> listen /bin/www
  www 文件就是网站项目的启动文件
  http.createServer(app.callback())
- 模板
  views
  koa-views()
  app.use() 启用中间件
  模板在哪里，使用哪种模板引擎 pug
- 路由
  routes/index.js
  koa-routes()
  .get post
  index.routes()
  app.use()
- logger
  koa-logger use
- 出错模块
  静态资源 服务器端资源
  IP
- koa-static
- 表单提交
  koa-bodyparser
  GET 请求头里 head url?a=1&b=2
  POST head url body.length +body

## node的发布
 docker容器化
 node 项目写完后 测试工程师 环境
 让项目在不同的机器里 享用相同的环境，跑起来 运用docker

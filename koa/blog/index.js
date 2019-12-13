// 单点入口
const Koa = require('koa');
const config = require('./config/default.js');
const postRouter = require('./routers/posts.js');
const signinRouter = require('./routers/signin.js')
const app = new Koa();
const ejs = require('ejs');
const views = require('koa-views');
const path = require('path');


app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'  //找到扩展名为ejs
}));
app.listen(config.port);
//use应答模式 中间件是处理应用请求的核心
//启用路由中件,出错，文件上传等中间件
app.use(postRouter.routes());
app.use(signinRouter.routes());
console.log(`监听${config.port}端口`);
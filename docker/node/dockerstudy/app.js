const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const logger = require('koa-logger');
const fs = require('fs');
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser');

//中间件式
//routes分层
onerror(app);
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}));
app.use(require('koa-static')(__dirname + '/public'));
// app.use(ctx => {
//     ctx.body = fs.createReadStream('dffaf'); //找不到会出错
// })

const index = require('./routes/index')
app.use(views(__dirname + '/views', {
    extension: 'pug'
}));
//模块化语句 COMMONJS

app.use(logger());
app.use(index.routes(), index.allowedMethods())
module.exports = app;
const router = require('koa-router')();
const controller = require('../controller/c-signin')
router.get('/signin',controller.getSignin); //getPosts将会在c-post中定义 显示登录页
router.post('/signin',controller.postSignin);
module.exports = router;
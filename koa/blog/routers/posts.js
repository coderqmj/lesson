const router = require('koa-router')();
const controller = require('../controller/c-posts')
router.get('/posts',controller.getPosts); //getPosts将会在c-post中定义
module.exports = router;
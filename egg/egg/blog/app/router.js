'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //blog 新增一个博客 显示博客列表 博客的详情 
  // url=/ method=get 控制器 
  router.get('/', controller.home.index);
  // 显示博客列表 所有的博客都显示出来
  router.get('/posts',controller.post.index);
  // //显示谋篇博客
  // router.get('/posts/:id');
  router.get('/posts/create',controller.post.new);  //创建 controller.post.new  controller下post中new函数 显示一个模板
  router.post('/posts',controller.post.create);
  // router.delete('/posts:id'); //删除某篇文章
  // router.put('/posts:id');   //修改某篇文章
};

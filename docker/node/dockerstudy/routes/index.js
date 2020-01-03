const router = require('koa-router')();


router.get('/', async(ctx, next) => {
        // 吧模板读取到内存，pug 模板的编译
        await ctx.render('index', { title: '首页' });

    })
    // commandJS
router.post('/form', async(ctx, next) => {
    console.log("form");
    ctx.body = ctx.request.body
});

module.exports = router;
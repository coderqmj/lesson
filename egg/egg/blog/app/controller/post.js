const Controller = require('egg').Controller;

class PostController extends Controller{
    async new(){

        // this.ctx.body = '邱模建';
        await this.ctx.render('new.tpl');//找到new.tpl渲染他
    }
    async create(){
        const {ctx} = this; 
        let {title,body} = ctx.request.body; //请求体
        // console.log(title,body);
        await ctx.service.post.newPost(title,body);
        // this.ctx.body = '处理提交表单' 
        ctx.redirect('/posts');
    }
    async index(){
        await this.ctx.render('index.tpl');
    }
    
}
module.exports = PostController;
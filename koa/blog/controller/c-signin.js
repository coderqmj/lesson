exports.getSignin = async (ctx)=>{ //exports为输出
    //中间件处理函数
    await ctx.render('signin',{
        
    })

}
exports.postSignin = async (ctx)=>{ //exports为输出
    //中间件处理函数
    ctx.body = {
        mes:'登陆成功'
    }

}
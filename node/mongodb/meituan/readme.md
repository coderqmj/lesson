-   app.get('/'，function（req,res){
    res.send{
        code:0,
        massage:'hello'
    }
}) 请求首页
-   req+res = 依次用户请求的响应
-   url 显示餐馆的详情 /restaurant/:restaurant_id
    -   :restaurant_id 
http://www.meituan.com/path/restaurant/params?a=1&b=2  查询字符串 /协议+/域名 req.params.restaurant_id 可以得到id

-   http 协议
-   domain 域名
-   path /restaurant/:id
-   GET请求里面的东西获得
-   加入餐馆的URL
    -   form表单
    -   /restaurant
    -   使用post    form
    -   get 餐馆列表 /restaurant?page=1
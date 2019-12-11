-   app.json 至少要{"pages":[]}
    -   app.js用于页面注册
-   页面上的js也要注册 Page({})
    -   数据也要放入相应的js文件的Page中
    -   格式：Page({
        data: {
            name: '邱模建',
            age: 18,
            sex: '男'
        }
    })
-   设置数字类型的值不能以0开头？
-   循环语句:<view wx:for="{{数组名}}">名字：{{item.属性}} 年龄：{{item.属性}}</view>
-   监听事件：<button size="mini" bindtap='对应函数名'>+</button>  事件监听bindtap='函数名'
-   事件监听写在页面的js的Page中 例如：
Page({
    handleBtnClick(){
        console.log('发生了点击事件！')
    }
})
-   绑定函数名时不用加（）
-   <text selectable='{{true}}'></text>
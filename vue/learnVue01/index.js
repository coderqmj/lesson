const app = new Vue ({
    el: '#app', //挂载要管理的元素
    data:{      //定义数据
        message:"你好啊，吃了吗？"
    }
})
const movie = new Vue ({
    el:'#movie',
    data:{
        message:'你好啊',
        movies:['海王','星际穿越','大话西游','盗梦空间']
    }
})
const counter = new Vue ({
    el:'#counter',
    data:{
        message:'当前计数:',
        counter:0
    },
    methods:{
        add: function(){
            console.log("add被执行");
            this.counter++
        },
        sub: function(){
            console.log("sub被执行");
            this.counter--
        }
    }
})


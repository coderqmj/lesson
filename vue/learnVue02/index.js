const app = new Vue({
    el:'#app',
    data:{
        message:'吃了吗？',
        imgUrl:'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1371065433,292726484&fm=26&gp=0.jpg',
        aHref:'https://www.baidu.com',
        book:[
            {id: 110,name: '西游记', price: 100},
            {id: 112,name: '水浒传', price: 200},
            {id: 113,name: '三国', price: 300}
        ],
        firstName:'kobe',
        lastName:'Bryant'
    },
    computed:{
        sumPrice: function(){
            return this.book[0].price + this.book[1].price +this.book[2].price;
        },
        fullName:{
            set:function(){

            },
            get:function(){
                return this.firstName + "" + this.lastName;
            }

        }
    }
})

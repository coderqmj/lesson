const app = new Vue({
    el: "#app",
    // data:{
    //     arrs:['a','b','c','d','e'],
    //     movies:['星际穿越','记忆碎片','盗梦空间','新世界'],
    //     currentIndex : 0
    // },
    // methods :{
    //     liclick(index){
    //         this.currentIndex = index
    //     }
    // }
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                signlePrice:85.00,
                count: 1
            },
            {
                id: 2,
                name: '《西游记》',
                date: '2007-9',
                price: 65.00,
                signlePrice:65.00,
                count: 1
            },
            {
                id: 3,
                name: '《三国》',
                date: '2008-9',
                price: 75.00,
                signlePrice:75.00,
                count: 1
            },
            {
                id: 4,
                name: '《梦的解析》',
                date: '2009-9',
                price: 65.00,
                signlePrice:65.00,
                count: 1
            }
        ]
    },
    methods: {
        getFixPrice(price) {
            return '￥' + price.toFixed(2)
        },
        min(index) {
            if (this.books[index].count > 1){
                this.books[index].count--
            // console.log("惦记了减少");
            }else{
                this.books[index].count = 1
            }
            this.books[index].price = this.books[index].signlePrice*this.books[index].count
        },
        add(index) {
            this.books[index].count++
            this.books[index].price = this.books[index].signlePrice*this.books[index].count
            // console.log("加");
        },
        reMove(index){
            this.books.splice(index,1)
        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2)
        }
    },
    computed:{
        sumPrice(){
            // return this.books[0].price + this.books[1].price+this.books[2].price+this.books[3].price 当删除某项时就不行 undefined
            // let sumPrice = 0;
            // for(let i in this.books){ //遍历高级写法
            // // for(let i =0;i<this.books.length;i++){//普通遍历
            //     sumPrice += this.books[i].price;
            // }
            // return sumPrice
            //高阶函数reduce用法
            return this.books.reduce(function(pre,book){
                return pre+book.price
            },0)
        }
    }
})
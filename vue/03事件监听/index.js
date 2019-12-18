const app = new Vue({
    el:"#app",
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
    data:{
        books:[
            {
                id:1,
                name:'《算法导论》',
                date:'2006-9',
                price:85.00,
                count:1
            },
            {
                id:2,
                name:'《西游记》',
                date:'2007-9',
                price:65.00,
                count:1
            },
            {
                id:3,
                name:'《三国》',
                date:'2008-9',
                price:75.00,
                count:1
            },
            {
                id:4,
                name:'《梦的解析》',
                date:'2009-9',
                price:65.00,
                count:1
            }
        ]
    },
    methods:{
        getFixPrice(price){
            return '￥'+ price.toFixed(2)
        }
    }
})
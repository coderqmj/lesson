const app = new Vue({
    el:'#app',
    data:{
        message:"吃了吗？",
        sex:'',
        isAgree:false,
        hobbies:[],
        fruit:'西瓜',
        age:'10',
        name:''
    },
    methods:{
        changeValue(event){
            // console.log("发生了输入事件");
            this.message = event.target.value;
        }
    }
})
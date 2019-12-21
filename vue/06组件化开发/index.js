//1.创建组件
const cpnC1 = Vue.extend({
    template: `
        <div>
            <h2>我是子组件</h2>
            <p>我是内容</p>
        </div>`
})
const cpnC = Vue.extend({
    template: `
        <div>
            <h2>我是父组件</h2>
            <p>我是内容</p>
            <cpn1></cpn1>
        </div>`,
    components:{
        cpn1:cpnC1
    }
})

//语法糖
Vue.component('cpn',{
    template:'#cpn',
    data(){
        return {
            title: 'abc'
        }
    }
})

//2.注册组件
// Vue.component('mycpn',cpnC) //取名字 创建的名字
const app = new Vue({
    el:'#app',
    data:{

    },
    components:{
        mycpn:cpnC
    }
})
const app = new Vue({
    el:'#app',
    data:{

    }
})
//1.创建组件
const cpnC = Vue.extend({
    template: 
        `<div>
            <h2>我是标题</h2>
            <p>我是内容</p>
        </div>`
})
//2.注册组件
Vue.component('mycpn',cpnC) //取名字 创建的名字
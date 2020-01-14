// commonjs的规范
const { sum, mul } = require('./mathUtil.js')
console.log(sum(20, 30));
console.log(mul(30, 30));


//es6的规范
import { name, age, height } from './info'
console.log(name, age, height);

import Vue from 'vue'
const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello webpack'
    }
})
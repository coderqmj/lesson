// const app = new Vue({
//     el:app,
//     data:{

//     }
// })
const nums = [11,55,713,250,88,40]
let newNums = nums.filter(function(n){
    return n<100
})
console.log(newNums);
let newNums1 = newNums.map(function(n){
    return n*2
})
console.log(newNums1);
let sum = newNums1.reduce(function(previousValuse,n){
    return previousValuse + n
},0)
console.log(sum);


//链式写法
// let sum = nums.filter(function(n){
//     return n<100
// }).map(function(n){
//     return 2*n
// }).reduce(function(previousValuse,n){
//     return previousValuse + n
// },0)

//高级写法

// let sum = nums
//             .filter(n=>n<100)
//             .map(n=>n*2)
//             .reduce((previousValuse,n)=>previousValuse+n)
// console.log(sum);
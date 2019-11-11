// 数组去重
/**
 * 
 * @param {Array} a rr
 * @return{Array}
 */
// function unique(arr){    es5
// 下面function 关键字没有， =>是es6的箭头函数 () => {} 无需function关键字
let fn;
console.log(typeof fn);     //undefined 未定义  虽然声明了 但是类型还未定义 下一行定义为 ‘函数’ 类型
fn = null;
console.log(typeof fn);
fn = () => {};
console.log(typeof fn);      //function
const unique = (arr) =>{
    let res = [];//数组
    for(var i = 0,arrlen=arr.length; i < arrlen; i++){
        var current = arr[i];   //基地 局部变量，缓存值
        if(res.indexOf(arr[i]) ==-1 ){  //if 里是未找到
            res.push(current);
        }
    }

    // for(var i = 0; i < arr.length; i++){
    //     //如果在res 数组中 就不加入
    //     // let isIn = false;
    //     for(var j = 0; j< res.length; j++){
    //         if(arr[i] === res[j] ){
    //             isIn = true;
    //             break; //提前终止
    //         }
    //     }
    //     // 没有出现？
    //     if(j==res.length){
    //         res.push(arr[i]);
    //     }
        // if(!isIn){
        //     res.push(arr[i]);
        // }
        //否则 push res
    
    return res;
}

var arr = ['1',2,3,2,4,1];
console.log(unique(arr));
// console.log(typeof unique == 'function' && unique(arr) )
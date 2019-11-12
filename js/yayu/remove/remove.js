//es6set去重:100万数据耗时15ms
// const remove = (arr) => {  
//     return Array.from(new Set(arr))
// }

// ----------------------这是一条分割线----------------------------


//两重for循环：100万数据耗时85133.908ms
// function remove(arr){
//     for(var i=0; i<arr.length; i++){
//         for(var j=i+1;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 arr.splice(j,1);
//                 j--;
//             }
//         }
//     }
// return arr;
// }

//重写数组法：100万数据耗时26ms
const remove=(brr)=>{
    var array=[];
    for(var i = 0; i<arr.length; i++){
        if(array.indexOf(arr[i])===-1){
            array.push(arr[i]);
        }
    }
return array;
}

var arr =[];
for(var i = 0 ;i<1000000;i++){
    var num = Math.floor(Math.random() * 10 + 1);
    arr.push(num);
}
console.time('test');
remove(arr);
console.log(remove(arr));
console.timeEnd('test');


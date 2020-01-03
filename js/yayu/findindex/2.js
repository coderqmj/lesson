'use strict'
//predicate 用户自定义 函数
//返回符合条件的下标，否则返回-1
function findIndex(array, predicate, context) {
    for (let i = 0; i < array.length; i++) {
        if (predicate.call(context, array[i], i)) {
            return i;
        }

    }
    return -1;
}
// 函数可以作为参数 在js中函数是一等对象
console.log(findIndex([1, 2, 3, 4], function(item, i) {
    console.log(this);
    if (item == 3) return true;
}, [1, 2, 3, 4]));
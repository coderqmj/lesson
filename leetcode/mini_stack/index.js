const arr = [];
arr.push('建宁');
arr.push('曾柔');
arr.push('双儿');
arr.push('阿珂');
//队列，栈
const ake= arr.pop() //数组中去掉元素
arr.unshift(ake)   //unshift(元素) 可以将该元素排到第一 依次..
arr.unshift('苏奎');
const sq = arr.shift();
arr.push(sq);
console.log(arr)
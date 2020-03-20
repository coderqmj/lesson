var isPalindrome = function (x) {
  //字符串反转 
  // var x1 = x + '';
  // x1 = x1.split("").reverse().join("");
  // return x + '' == x1 ? true : false

  //数字反转
  // var x = 121234
  var a
  var arr = []
  var isPalindrome = true
  while (x) {
    a = x % 10
    x = Math.floor(x / 10)
    arr.push(a)
  }
  for (let i = 0; i < Math.floor(arr.length); i++) {
    if (arr[i] != arr[arr.length - i - 1]) {
      isPalindrome = false
    }
  }
  return isPalindrome


};
console.log(isPalindrome(1211211));

// var x = 121234
// var a
// var arr = []
// while (x) {
//   a = x % 10
//   x = Math.floor(x / 10)
//   arr.push(a)
// }
// for (let i = 0; i < Math.floor(arr.length); i++) {
//   if (arr[i] !== arr[arr.length - 1]) {
//     return false
//   }
//   return true
// }
// console.log(arr);
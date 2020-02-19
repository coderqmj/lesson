// var a
// console.log(a,typeof (a) ,typeof a === 'undefined',a==='undefined');
// a = 3
// console.log(typeof a ==='Number',typeof a ==='number' );

// var b1 = {
//   b2:[1,'abc',console.log],
//   b3:function(){
//     console.log('b3');
//   }
// }
// // console.log(b1 instanceof Object);
// // console.log(typeof b1.b2[2]==='function');


// console.log(typeof b1 );

// var a; console.log(a);a = null;console.log(a);

//关于对象
var a = {age:12}
b = a
a = {age:13,name:'qiu'}
function foo (a){
 return a={age:18}
}
foo(b)
console.log(b.age);
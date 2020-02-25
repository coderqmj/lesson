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
// var a = {age:12}
// b = a
// a = {age:13,name:'qiu'}
// function foo (a){
//  return a={age:18}
// }
// foo(b)
// console.log(b.age);

//值传递还是引用传递
// var a =3
// function foo (a){
//   a= a +1
//   console.log(a);
// }
// foo(a)
// console.log(a);

//obj['属性名']的使用
// var obj = {
//   'content-type':'text/json',
//   abc:123
// }
// console.log(obj[bc]);

//call/apply调用函数
// var obj = {}
// function foo (){
//   this.name = 'qiu'
// }
// foo.call(obj)
// console.log(obj);
// console.log(obj.name);  //qiu

// function foo(){
// }
// foo.prototype.test = function(){
//   console.log('test()');
// }
// var a = new foo()
// console.log(foo.prototype,a.__proto__)
// console.log(test);
// console.log(foo.prototype === a.__proto__);
// console.log(foo.prototype instanceof Object);
// console.log(Object.prototype);

//两个>>和>>>都是向下取整
// console.log(8.225555 >>> 0);
console.log(2.222 > 0);
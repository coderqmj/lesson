function Person(name,age){
    this.name=name;
    this.age=age;
}
//该toString 将原有的覆盖
Person.prototype.toString = function(){
    return '大家好，我叫'+this.name;
}

function Man(name,age){
    // console.log(arguments,'-------');[Arguments] { '0': '邱模建', '1': 20 }
    //Person 构造函数 把父类的构造函数执行 arguments是参数集合
    Person.apply(this,arguments);
}
Man.prototype = Object.create(Person.prototype);
var qmj = new Man("邱模建",20);
// var person = new Person('邱模建',20);
// console.log(person+""); //加"" 将person字符串化 ，主动调toString  类型转化(字符串化)

// const arr = ['aaa','bbb','ccc'];
// console.log(Object.prototype.toString.call(arr)); //{} .call借用一下  输出[object Array]
console.log(qmj+'');
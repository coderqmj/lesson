//自定义函数，将自己的定义的函数加到自有的函数内
~function(){
    function add(n){
        return this + n;  //返回Number这个类的实例才能使用链式写法
    }
    function minus(n){
        return this - n;
}
    Number.prototype.add=add; //将add函数加到Number原型
    Number.prototype.minus=minus;
}();
console.log((5).add(3).minus(2)) //!链式写法


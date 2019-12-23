var makeSound = function(animal){
    //多态 对象具有统一的接口，可以互换使用
    // if(animal instanceof Duck){ //来自与谁的实例
    //     console.log('gagga');
    // }else{
    //     console.log('gegge');
    // }
    animal.say(); //面向对象的优化
}
var Duck = function(){};
Duck.prototype.say = function(){
    console.log('嘎嘎嘎!');
}
var Chicken = function(){};
Duck.prototype.say = function(){
    console.log('咯咯咯!');
}
makeSound(new Chicken());
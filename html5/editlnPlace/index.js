function EditInPlace(id,parent,value){
    this.id = id;
    this.value = value || 'default value';
    this.parentElement=document.getElementById(parent);

    this.createElements();//把节点显示到页面上
    this.attachEvents();

}
EditInPlace.prototype.attachEvents = function (){

}
//构造函数
EditInPlace.prototype.createElements = function(){
    // console.log("函数");
    this.containerElement = document.createElement('div');
    this.staticElement = document.createElement('span');
    this.staticElement.innerHTML = this.value;
    this.containerElement.appendChild(this.staticElement)
    this.parentElement.appendChild(this.containerElement);
}
var profileEditor = new EditInPlace('titleClassical','tltle','这家伙很懒，什么东西都没有留下');
function EditInPlace(id,parent,value){

}
EditInPlace.prototype={
    createElement:()=>{},//创建节点
    attachEvents(){},//管理所有的事件
    convertToText(){},
    convertToEdit(){},
    save(){},
    setValue(val){
        this.value = value;
        this.staticElement.containerElement = value;
        localStorage.setItem('profile',value)
    }
}
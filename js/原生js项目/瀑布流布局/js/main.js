//思路：
    //将第一组横向摆放， 第二组数据开始寻找每一列高度最低的，将元素放入(定位，or每一列都是容器)

//代码实现 
    //数据没有
    //创建100个div，不同高度，不同颜色

var colWidth = 200; //设置单个有多宽
//计算页面可以容纳多少列
var colNum = Math.floor(window.innerWidth/colWidth)  //向下取整
// console.log(col)
// 间隙是多少
var jx = Math.floor((window.innerWidth - colNum*colWidth)/(colNum+1));
//存储高度的数组，每一次将每一列的高度存储起来
var saveH = [];
// console.log(jx)

function createDiv(){
    var doc = document.createDocumentFragment(); //创建一个文档片段
    for(var i =0;i<100;i++){
        var div = document.createElement("div");
        div.innerHTML = i+1;
        div.className = "item";
        //随机高度
        var h = Math.floor(Math.random()*100)+200; //!Math.floor 向下取整  该范围是 200--299
        //添加一个随机的背景颜色 0--255
        var r =Math.floor(Math.random()*256); //向下取整 范围 0 - 255
        var g =Math.floor(Math.random()*256);
        var b =Math.floor(Math.random()*256);
        var bgColor = "rgb("+r+","+g+","+b+")"; //!注意该用法
        div.style.backgroundColor = bgColor;
        div.style.height = h+"px";
        div.style.lineHeight = h+"px"
        div.style.width = colWidth+ "px";
        doc.appendChild(div);
    }
    document.body.appendChild(doc)

    //实现瀑布流
    show();
}
createDiv();


//实现瀑布流的具体实现
function show(){
    //遍历所有的item
    var item = document.querySelectorAll(".item");
    for(var i =0;i<item.length;i++){
        //需要colNum列
        if(i<colNum){
            item[i].style.top = jx + "px";
            item[i].style.left = jx*(i+1)+colWidth*i+"px";
            //存储高度
            saveH.push(item[i].offsetTop+item[i].offsetHeight);
            console.log(item[i].offsetTop+item[i].offsetHeight)
        }else{//找到高度最小的那个
            var index =  getMin(saveH);
            item[i].style.top = jx + saveH[index] + "px";
            item[i].style.left = jx*(index+1)+colWidth*index+"px";
            //修改存储高度的数组
            saveH[index] = saveH[index] + item[i].offsetHeight + jx;
        }
    }
}

/**
 * 获取数组中最小高度函数
 */
function getMin(arr){
    var curIndex = 0;
    var min = arr[0];
    for(var i =0; i<arr.length;i++){
        // var cur = arr[i];
        // cur > min? min = cur : null;
        if(arr[i]<min){
            min = arr[i]; 
            curIndex = i;
        }
    }
     return curIndex;
    // console.log(min)
}
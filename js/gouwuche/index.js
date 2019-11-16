// var add_car = document.querySelectorAll()
function add_shoppingcart(btn){
    var tr = btn.parentNode.parentNode;
    var tds = tr.getElementsByTagName("td");//知道到所有td元素
    var name = tds[0].innerHTML;
    var price = tds[1].innerHTML;
    var tbody = document.getElementById("goods");
    var row = tbody.insertRow();
    row.innerHTML =
                '<td>'+name+'</td>'+
                '<td>'+price+'</td>'+
                '<td align="center">'+
                '<input type="button" value="-" onclick="change(this, -1);"/> '+
                '<input type="text" size="3" readonly value="1"/> '+
                '<input type="button" value="+" onclick="change(this, 1);"/> '+
                '</td>'+
                '<td>'+price+'</td>'+
                '<td align="center"><input type="button" value="x" onclick="del(this);"/></td>';
    total();
}
function total(){
    var tbody = document.getElementById("goods");
    var sum = 0;
    var trs = tbody.getElementsByTagName("tr");
    for(var i = 0;i<trs.length;i++){
        var tds = trs[i].getElementsByTagName("td");
        sum = sum+parseFloat(tds[3].innerHTML);
        // console.log(tds[3])  tds[3] = <td> 60 </td>  tds[3].innerHTML=60
    }
    var total = document.getElementById("total");
    total.innerHTML = sum;

}

function change(btn, n) {
    var inputs = btn.parentNode.getElementsByTagName("input");
    var amount = parseInt(inputs[1].value);
    if(amount<=1 && n<0) {
        return;
    }
    inputs[1].value = amount + n;
    amount = inputs[1].value;
    var tr = btn.parentNode.parentNode;
    var tds = tr.getElementsByTagName("td");
    var price = parseFloat(tds[1].innerHTML);
    var m = price*amount;
    tds[3].innerHTML = m;
    total();
}
function del(btn){
    var tr = btn.parentNode.parentNode;
        tr.parentNode.removeChild(tr);
        total();
}
 
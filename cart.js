//remove alert

remove("x");
remove("x1");
remove("x2");
remove("x3");

document.getElementById("checkout-before-signin").onclick=function(){
    alert("Please sign in before checkout");
}

document.getElementById("payment-section").onclick=function(){
    alert("We will direct you to payment section");
}



//find subtotal 
var tot_price1;
var tot_price2;
var tot_price3;
var tot_price4;

function calculateAmount(subtotalofapple) {
    tot_price1 = subtotalofapple * 10.00;
    /*display the result*/
    document.getElementById('price1').innerHTML=tot_price1;
    return tot_price1;


}
function calculateAmount1(subtotalofbeef) {
     tot_price2 = subtotalofbeef * 18.00;
    /*display the result*/
    document.getElementById('price2').innerHTML=tot_price2;

}
function calculateAmount2(subtotaloforanges) {
     tot_price3 = subtotaloforanges * 10.00;
    /*display the result*/
    document.getElementById('price3').innerHTML=tot_price3;

}
function calculateAmount3(subtotalofprawn) {
     tot_price4 = subtotalofprawn * 10.00;
    /*display the result*/
    document.getElementById('price4').innerHTML=tot_price4;
}

function remove(Id){
    document.getElementById(Id).onclick=function(){
    alert("Remove successfully !!!");
    }

}


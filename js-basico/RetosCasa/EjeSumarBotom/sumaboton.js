var input = document.getElementById("num1"); // GUARDO EL OBJETO INPUT DE HTML EN UNA VARIABLE 
var input2 = document.getElementById("num2");

console.log(input, input2);


function agregar (){
    var numero1 = input.value;  //accedo a su valor del imput
    console.log(numero1)
    return numero1
}


function agregar2 (){
    var numero2 = input2.value;
    console.log(numero2)
    return numero2
}


var sumar = function (){

    return  alert( agregar() + agregar2())  
}

var restar = function ( c , d){
    var c = parseInt(prompt("inserta el num"));
    var d = parseInt(prompt("inserta el num"));
    return alert( c - d )
}

var multiplicar = function(e , f){
    var e = parseInt(prompt("inserta el num"));
    var f = parseInt(prompt("inserta el num"));
    return alert(e * f)
}

var dividir = function(g , h){
    var g =parseInt(prompt("inserta el num"));
    var h =parseInt(prompt("inserta el num"));
    return alert (g / h)
}

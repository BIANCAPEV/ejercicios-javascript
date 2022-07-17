var input = document.getElementById("num1"); // GUARDO EL OBJETO INPUT DE HTML EN UNA VARIABLE 
var input2 = document.getElementById("num2");
var mostrarRes = document.getElementById("res-el");
 
console.log(input, input2);//ayuda a verlos en la consola 


function agregar (){
    var numero1 = parseInt(input.value)  //accedo a su valor del imput
    console.log(numero1)
    return numero1
}

        //reserva un valor en la memoria, para guardar el valor 
function agregar2 (){
    var numero2 = parseInt(input2.value) //valida el valor si es nuero o string
    console.log(numero2)
    return numero2 // retorna el numero a la funcion agregar2
}


var sumar = function (){
    var res = agregar() + agregar2()  
    var text = res.toString();
    mostrarRes.innerText = text
}

var restar = function (){
   
    var res =  agregar() - agregar2 ()
    var text = res.toString();
    mostrarRes.innerText = text
}

var multiplicar = function(){

    var res = agregar() * agregar2()
    var text = res.toString();
    mostrarRes.innerText = text
}

var dividir = function(){
 
    var res = agregar() / agregar2()

    var text = res.toString(); // toString(); convierte numero a texto
   
    mostrarRes.innerText = text // innerText agrega el texto aun elemeto HTML 


}


 var medidas = prompt ("Que quieres convertir: centimetros o metros ");
console.log(medidas);

if (medidas == "metros"){ //ayuda a dirijir que operacion hacer dependiendo de lo quqe el usuario elija 
    var metros = prompt("ingresa la cantidad en metros");//Esta variable guarda la informacion del usuario
     var c = (metros * 100);    // esta variable multipica lo que el usuario ingreso con los datos que corresponde
    alert( "son " + c + " cm"); // da la respuesta al ususario en pantalla

}else if ( medidas == "centimetros"){ // ==para validar lo que el usuario ingreso 
    var centimetros = prompt(" ingresa la cantidad en centimetros");
    var d = (centimetros / 100);
    alert("son " + d + " m");

}else {
    alert("intente de nuevo");
}


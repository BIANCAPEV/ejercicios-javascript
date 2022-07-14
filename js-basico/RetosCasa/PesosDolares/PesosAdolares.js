var eligePesoDollar = prompt('Quieres convertir pesos o dolares?') 
console.log(eligePesoDollar);

if (eligePesoDollar == 'pesos') { // condicion si + variable + string
    var peso = prompt("Igresa la cantidad:");// guardo en la variable el dato del usuario 
    var c = peso / 19.5 
    alert("El resultado de tu convercion es :" + c + " dolares" );
 
} else if (eligePesoDollar == 'dolares') { //si no, + variable + string 
    var dolares = prompt("Ingresa la cantidad:" ); 
    var d = dolares * 19.5
    alert("el resultado de tu convercion es :" + d + " pesos");
} else{             // else no lleva condicion ()
    alert("ingrese de nuevo un peso o dolar"); // le dice al usuario que ingrese una opcion correcta 
}
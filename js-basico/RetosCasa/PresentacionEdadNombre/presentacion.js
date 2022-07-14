 var nombre = prompt("Cual es tu nombre ?: ");
 var edad = prompt ("Cual es tu edad?: ");

 var texto = "Hola me llamo ";
 var stringEdad = " y tengo ";

 if (edad <=  12 ) {
     console.log ("Soy un chaval ");
    var recomendacion = (" Juego mucho, y como verduras");
 }else if (edad <= 18){
    console.log ("Soy un adolecente");
    var recomendacion = (" Nunca paro de aprender");
 }else if ( edad <= 49){
    console.log(" Soy un adulto");
    var recomendacion = (" Hacer lo que me gusta no es trabajo");
 }else if ( edad <= 99) {
    console.log ("Soy un adulto mayor");
    var recomendacion = (" Heredo sabiduria");
 } else {
    console.log("intenta de nuevo");
 }

//Hola me llamo bianca15Nunca pares de aprender
//Hola me llamo sam y tengo 10Juega mucho, come verduras
 console.log( texto + nombre + stringEdad + recomendacion);
 alert(  texto + nombre + stringEdad  + edad + " años "+ recomendacion );
var eligeOperacion = prompt("Que operacion relizaras? suma, resta, multiplicacion, divicion, porcentaje");
var a = parseInt (prompt ("Ingresa el primer numero:"));
var b = parseInt (prompt ("Ingresa el segudo numero:"));
var texto = "El resultado es: "
console.log(typeof(a))
console.log(typeof(b))


if (eligeOperacion == 'suma') {
    console.log('El usuario eligio: ',eligeOperacion);
    var c = (a + b);
 } else if (eligeOperacion == 'resta'){
    console.log('El usuario eligio: ',eligeOperacion);
    var c = (a - b);
 } else if (eligeOperacion == 'multiplicacion'){
    console.log('El usuario eligio: ',eligeOperacion);
    var c = (a * b);
 } else if (eligeOperacion == 'divicion'){
    console.log('El usuario eligio: ',eligeOperacion);
    var c = (a / b);
 } else if (eligeOperacion == "porcentaje" ){
    console.log("El usuario eligio:", eligeOperacion);
    var x = (100);
    var c = (a * b / x);

 }else {
    console.log('Ingresa una operacion correcta')
}

console.log( texto + c )
alert( texto + c )

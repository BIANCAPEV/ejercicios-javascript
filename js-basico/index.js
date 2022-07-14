var eligeOperacion  = prompt ('¿Que operacion deseas hacer: súma, resta, multipicación o divición?')
var a = parseInt (prompt ('Ingresa el primer numero:')); // parseInt  comprueba el primer argumento, una cadena, e intenta devolver un entero de la base especificada.
var b = parseInt (prompt ('Ingresa el segundo numero:')); 
var texto = 'El resultado es:'
console.log(typeof(a))
console.log(typeof(b))


if (eligeOperacion == 'suma') {
    console.log('El usuario eligio: ', eligeOperacion);
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
 }
else {
    console.log('Ingresa una operacion correcta')
}




console.log( texto + c )


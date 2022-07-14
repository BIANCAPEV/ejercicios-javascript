
var totalApagar  = (prompt ("Cual es el total a pagar?: "));
var c = 5
var b = 10
var d = 20
var texto = "Su descueto es de:"


if ( totalApagar <=  999){
    console.log("tu descuento es: 5 %", totalApagar);
    var x = (100);
    var resultado = (totalApagar * c / x);
} else if (totalApagar >= 1000 && totalApagar <= 1999){
    console.log("tu descuento es: 10 %",totalApagar);
    var x = (100);
    var resultado = (totalApagar * b / x);   
} else if ( totalApagar >= 2000){
    console.log("tu descuento es:  20%",totalApagar);
    var x = (100);
    var resultado = ( totalApagar * d / x);
}
var  precioFinal = totalApagar - resultado


 
console.log(texto + resultado);
alert( texto + resultado );
alert( "usted va a pagar:" + precioFinal);


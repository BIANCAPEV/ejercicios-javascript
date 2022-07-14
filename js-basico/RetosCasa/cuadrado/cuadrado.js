
 var operacion = prompt("Desea calcular el area o el permimetro:?");
 
 if (operacion == "area"){
    var area = prompt("Ingresa el num:")
    var a = (area * area);
    alert("tiene un area de: " + a );

 }else if (operacion == "perimetro"){
    var perimetro = prompt("Ingresa el num:")
    var p = (perimetro * 4);
    alert("tiene un perimetro de:" + p );

 }else {
    alert("Intentade de nuevo");
 }

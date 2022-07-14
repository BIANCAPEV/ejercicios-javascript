var figuras = prompt("Que figura ocupas?: cuadrilatero, triangulos, circulo");

if (figuras == "cuadrilatero"){
        var cuadrilateros = prompt("cuadrado o rectangulo");
    if (cuadrilateros == "cuadrado"){
        var operacion = prompt("area o perimetro");
        if( operacion =="area"){
          var area = prompt("Ingresa el num");
          var a = (area * area);
          alert("tu area es de: " + a)  

        } else if(operacion == "perimetro"){
            var perimetro = prompt("ingresa el num:")
            var p = (perimetro * 4);
            alert("Tu perimetro es de:" + p)
        }

    } else if (cuadrilateros == "rectangulo"){
        var operacion = prompt("area o perimetro");
        if( operacion == "area"){
            var b = prompt("Ingresa la base:");
            var h = prompt("Ingresa la altura:");
            var area = ( b * h);
            alert("su area es de: " + area )

        } else if ( operacion == "perimetro"){
            var perimetrobase = parseInt(prompt("Ingresa el base"));// ingrese parseint por que solo me daba el resultdo 105 no sumaba 10 + 5 
            var perimetroaltura = parseInt(prompt("Ingresa el altura"));
            var perimetro = ( perimetrobase + perimetroaltura +perimetroaltura + perimetrobase );
            alert("su perimetro es de: " + perimetro) 
        }
    }    

} else if (figuras == "triangulos"){
    var triangulos = prompt("Que triangulo, equilatero, escaleno, isoceles");

    if (triangulos == "equilatero"){
        var equilatero = prompt ("area o perimetro");
        if( equilatero == "area"){
            var b = prompt("ingresa la base")
            var h = prompt("ingresa la altura")
            var x = ( 2 )
            var area = (b * h / 2)
            alert("su altura es de: " + area )

         }else if ( equilatero == "perimetro") {
            var b = prompt("ingrese la base")
            var perimetro = b * 3
            alert("su perimetro es de: " + perimetro )
         }
    }else if (triangulos == "escaleno") {
        var escaleno = prompt ("area o perimetro");
        if ( escaleno == "area"){
            var b = prompt("ingresa la base: ")
            var h = prompt("Ingresa la altura: ")
            var x = (b * h / 2)
            alert("su area es de: " + x)

        }else if (escaleno == "perimetro"){
        var b = parseInt(prompt("ingresa la base:"));
        var a = parseInt(prompt("ingresa la altura"));
        var c = parseInt(prompt("ingresa otro dato"));
        var perimetro = (b + a + c);
        alert("tu perimetro es de: " + perimetro )

        }


    }else if (triangulos == "isoceles"){
        var isoceles = prompt("area o perimetro")
        if (isoceles =="area"){
            var a = parseInt(prompt("ingresa la base"))
            var h = parseInt(prompt("ingresa la altura"))
            var x = (a * b / 2 )
            alert("tu area es de: " + x)


        }else if( isoceles == "perimetro"){
            var b = parseInt(prompt("ingresa la base:"))
            var l = parseInt(prompt("ingresa su lado "))
            var x = (b + l + l)
            alert("tu perimetro es de: " + x)    
        }
    }

}else if(figuras == "circulo") {
    var circulo = prompt ("perimetro o area  ")
    if (circulo == "perimetro") {
        var r = parseInt(prompt("ingresa el radio:"))
        var pi = 2 * 3.1416
        var x = pi * r
        alert("tu perimetro es de: " + x)

    } else if (circulo == "area"){
        var r = parseInt(prompt("ingresa el radio:"))
        var pi = 3.1416
        var x = r * r * pi
        alert(" tu area es de:" + x)

    }

}  else {
    alert("respuesta invalida")
}
//condicional if
//(0) va nuestra condicion, si algo es verdad
//{} se pone lo que va a pasar si esto es verdad
if (true) {

    console.log("hola")
 } else { //

 }

 if (false) {// valida lo que esta dentro como es flaso no hace nada 
    console.log("hola")
 } else { // pero si es falso que va a pasar 
    console.log("Soy falso")

 }
 Soy falso // como yano hay mas que validar me regrasa que soy falso 
undefined

/* que pasa cuando queremos seguir validando
 mas de una vez*/

 if (true){ // si no es esto
    console.log("Hola");
 }  else if () { // entonces podria ser esto
        
} else        //y si no ya generamos el final 
 
//EJEMPLO PERSONA MAYOR PUEDE VOTAR O NO 

var edad = 18;
// si edad es === a 18 anos
if(edad===18){ // si acabas de cumplir 18 "la primera vez que bota"
    console.log("Felicidades ya puedes votar");
}  else if(edad > 18){ // si ya pasas de los 18 "puedes votar de nuevo"
    console.log("Puedes vota de nuevo")
}else { // si aun no cumples los 18 "aun no puedes votar"
    console.log("Aun no puedes votar")
}

 /*si tenemos una condicion que queramos
  validar mas de 2 o 3 v3ces  podemos anidar 
  mas condiciones si la primera no se cumple o la segunda
  o la teceray asi sucesivamente  */

var edad = 18;  
  if(edad===18){ 
    console.log("Felicidades ya puedes votar");
}  else if(edad > 18){
    console.log("Puedes vota de nuevo")
}  else if(edad > 18){
    console.log("Puedes vota de nuevo")
}  else if(edad > 18){
    console.log("Puedes vota de nuevo")
}  else if(edad > 18){
    console.log("Puedes vota de nuevo")
}else {
    console.log("Aun no puedes votar")
}

// operador ternario; if y else en una sola linea
// como lo generamos 
condition ? true : false;

//ejemplo 

var nuero = 1; // quiero valiadr q real mete sea 1
                // si no va a decir que es falso
var resultado = numero === 1 ? "Si soy un uno" : "No soy uno";                


var  numero  =  1; 

 var resultado = numero === 1 ? "si soy un uno" : "no soy un uno";
    console.log(resultado);
    
VM755:4 si soy un uno
undefined
var  numero  =  2; 

 var resultado = numero === 1 ? "si soy un uno" : "no soy un uno";
    console.log(resultado);
VM765:4 no soy un uno
undefined
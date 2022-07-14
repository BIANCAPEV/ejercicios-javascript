console.log("Hola mundo")
// FUNCION DECLARATIVA

function miFuncion () {// function=palabra clave. hay que darle un nombre 
    return 3; 
}

miFuncion(); 


/* Esta es una  FUNCTION que va inicializar un valor en la 
memoria MiFuncion y va a guardar RETURN 3;*/


    //FUNCION DE EXPRECION
// generamos una variable = que guarda una funcion
    var miFuncion = function (a,b){ /*(Aqui van los parametros )*/
      return a + b;   
    }
    miFuncion(); 

    function saludarEstudiante (estudiante){
        console.log(estudiante);
    } 

    function saludarEstudiante (estudiante){
        console.log(`Hola ${estudiante}`);
    }
undefined
saludarEstudiante("Bianca");
VM974:2 Hola Bianca
undefined


function sumar (a,b) {
    var resultado = a + b;
    return a + b;
}
undefined
sumar(1,2);
3





function sumar (a,b) {
    return a + b;
}
undefined
sumar(11,12);
23


var numero = 1; //tenemos la variable, con su valor  

switch (numero) { // sirve para validar casos 
    case 1:
        console.log("soy un uno");  
        break;
    case 10:
        console.log("soy un diez");
        break;
    case 100: 
        console.log("soy un 100");
        break; // es importante ya q cuando se cumpla la validacion se rompe el ciclo
    default:
        console.log("no soy nada");    
}
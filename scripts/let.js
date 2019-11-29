// var, let, const

// Antes de hablar de estas tres palabras reservadas recordemos
// que tipos de datos tenemos

//  Tipos de datos primitivos.

//  string     -  cadena de caracteres
//  number     -  numeros
//  boolean    -  boleanos (true, false)
//  null       -  valor nulo
//  undefined  -  valor indefinido

//  Nuestras constantes no nos permitirán modificar el valor
//  nuevamente en el programa una vez ya definidas.
const nombre = "Ulises";
//  La palabra reservada var nos permite crear variables, 
//  sin embargo desde que salio la actualización de ES6 se recomienda 
//  usarla lo menos posible

var edad = 23;

// let sera la palabra que utilizaremos de ahora en adelante y fuciona igual 
// que las anteriores, con la diferencia de que no funcionan fuera de su scope

// Ejemplo de let.
console.log("===== Ejemplo con let =====");
let numero = 5;
console.log("Let en el entorno global tiene un valor de: " + numero);

if(true){
    let numero = 6;
    console.log("Let en el entorno del if tiene un valor de: " + numero);    
}

console.log("Let en el entorno global tiene un valor de: " + numero);

// Si hacemos este mismo ejemplo con var veremos lo que pasa.

console.log("===== Ejemplo con var =====");
var numeroVar = 35;
console.log("var en el entorno global tiene un valor de: " + numeroVar);

if(true){
    var numeroVar = 26;
    console.log("var en el entorno del if tiene un valor de: " + numeroVar);    
}

console.log("var en el entorno global tiene un valor de: " + numeroVar);

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array

/*
    Los arreglos los utilizamos para poder guardar múltiples datos
    en una sola variable, estos datos deben de tener relación entre si
    y aquí en JS podemos guardar datos de cualquier tipo


    Para declararlos lo que tenemos que hacer es declarar una variable como

    Le hacemos siempre con la diferencia que los valores que
    vayamos agregando serán dentro de unos corchetes, ejemplo.
*/

let nombreAlumnos = ["Ulises", "Javier", "David", "Mario"];

console.log(nombreAlumnos);

/*
    Cada uno de los elementos de nuestro arreglo tiene un numero asignado
    con el cual podemos imprimir individualmente, comenzando con el primer elemento
    en este caso "Ulises" tendrá asignado el índice 0
*/

console.log(nombreAlumnos[0]);

// Agregar elemento al final del arreglo
nombreAlumnos.push("Enrique");

// función para realizar sobre todos los objetos
nombreAlumnos.map(nombre => {console.log(nombre)} );

// Eliminar último elemento del arreglo
nombreAlumnos.pop();

// índice de un elemento
indice = nombreAlumnos.indexOf("Javier");

// Eliminar múltiples elementos según su índice

nombreAlumnos.splice(indice,2);
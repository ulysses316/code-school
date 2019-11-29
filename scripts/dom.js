let nuevoH1 = document.createElement('h1');
let nuevoParrafo = document.createElement('p');

// Crear nodos de texto para un elemento
let textoH1 = document.createTextNode('Hello world');
let textoParrafo = document.createTextNode('lorem ipsum...');

// Añadir el texto a los elementos
nuevoH1.appendChild(textoH1);
nuevoParrafo.appendChild(textoParrafo);


let cabecera = document.getElementById('cabecera');

// Añadir elementos hijos a un elemento
cabecera.appendChild(nuevoH1);
cabecera.appendChild(nuevoParrafo);

// También podemos añadir elementos ANTES del elemento seleccionado

// Tomamos el padre
let padre = cabecera.parentNode;

// Insertamos el h1 antes de la cabecera
padre.insertBefore(nuevoH1, cabecera);

var box2 = document.getElementById('box2');

let user = prompt("Cual es tu nombre?");
box2.insertAdjacentHTML('beforebegin', '<div><h1>Hola ' + user + '.</h1></div>');    

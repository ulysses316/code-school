/*

let alumnos = {
    alumno1: {
        nombre: "Ulises",
        calificacion: 10,
        ciudad: "CDMX",
        presentate: function(){
            nombre = this.nombre;
            city = this.ciudad;
            calif = this.calificacion;
            return ("Soy " + nombre +" "+ city + " " + calif);
        }
    },
    alumno2: {
        nombre: "Alexa",
        calificacion: 10,
        ciudad: "CDMX"     
    },
    alumno3: {
        nombre: "Ale",
        calificacion: 10,
        ciudad: "CDMX"
    },
    alumno4: {
        nombre: "Circe",
        calificacion: 10,
        ciudad: "CDMX"
    },
    arr: [1,2,3]
};


let circe = alumnos.alumno4;
circe.calificacion = 5;


alumnos.alumno4.direccion = ["Michoacan"]
console.log(alumnos.alumno1.presentate())

*/

let persona = {
    nombre: "Ulises",
    edad: 21,
    direccion: {
        calle:"Insurgentes",
        ciudad:"CDMX",
        casa: {
            cuartos:4,
            patio: true
        }
    },
    arreglo: [1,2,3,4],
    informacion: function(){
        let nombre = this.nombre;
        let edad = this.edad;
        let direccion = this.direccion.casa.cuartos
        let self = this;
        let soloNombre = function(){
            console.log("Con self: " + self.nombre);
            console.log("Con this: " + this.nombre);
        }
        soloNombre();
    },
    imprime:console.log(this)
}

console.log(persona.informacion())

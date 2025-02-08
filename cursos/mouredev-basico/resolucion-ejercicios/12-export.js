export function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

export const avogadro = 6.02214076e23;

export class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}


//export default function add(a, b) {
//    return a+b
//};

export default class Curso {
    constructor(nombre) {
        this.nombre = nombre;
    }

    mostrar() {
        console.log(this.nombre);
    }
}
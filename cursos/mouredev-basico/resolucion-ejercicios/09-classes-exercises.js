// 1. Crea una clase que reciba dos propiedades
// 2. Añade un método a la clase que utilice las propiedades

class Alumno {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    mostrarAlumno() {
        console.log(`El alumno ${this.nombre}, tiene ${this.edad} años`)
    }

    static mostrarMensaje(mensaje) {
        console.log("Este el mensaje:", mensaje)
    }
}


// 3. Muestra los valores de las propiedades e invoca a la función

let nuevo_alumno = new Alumno("Rodrigo", 33)

console.log(nuevo_alumno.nombre)
console.log(nuevo_alumno.edad)
nuevo_alumno.mostrarAlumno()

// 4. Añade un método estático a la primera clase


// 5. Haz uso del método estático

Alumno.mostrarMensaje("Hola")

// 6. Crea una clase que haga uso de herencia

class Recursante extends Alumno {
    constructor(nombre, edad, anioRecursante) {
        super(nombre, edad)
        this.anioRecursante = anioRecursante
    }

    mostrarAlumno() {
        super.mostrarAlumno()
        console.log("Este alumno es recursante")
    }
}

alumno_recursante = new Recursante("Perez", 29, "2022")

alumno_recursante.mostrarAlumno()

// 7. Crea una clase que haga uso de getters y setters

class Usuario {
    #id
    #nombre
    #alias
    constructor(nombre, alias, id) {
        this.#nombre = nombre
        this.#alias = alias
        this.#id = id
    }

    get nombre() {
        return this.#nombre
    }

    get alias() {
        return this.#alias
    }

    get id() {
        return this.#id
    } 

    set nombre(nombre) {
        this.#nombre = nombre
    }

    set alias(alias) {
        this.#alias = alias
    }

    set id(id) {
        this.#id = id
    } 


}

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

let usuario = new Usuario("Rodrigo", "rodrigo", 1)
console.log(usuario.nombre)
// 10. Sobrescribe un método de una clase que utilice herencia 
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

// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 
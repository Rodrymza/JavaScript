// 1. Crea un función que utilice error correctamente

function comprobarEntero(numero) {
    let tipo = typeof numero;
    switch (tipo) {
        case "number": console.log("Es un número");
            break;
        case "string": console.error("****string***");
            console.error("Debes colocar un numero");
        case "objetc": console.error("****object***");
            console.error("Debes colocar un numero");
        case "array": console.error("****array***");
            console.error("Debes colocar un numero");
    }
}

comprobarEntero(3);
comprobarEntero("3");

// 2. Crea una función que utilice warn correctamente

function mayorQueCero(numero) {
    if (numero > 0) {
        console.warn("El número es mayor que cero");
    } else {
        console.warn("El número no es mayor que cero");
    }
}

// 3. Crea una función que utilice info correctamente

function mostrarInfo(mensaje) {
    console.info("Informacion:", mensaje)

}

// 4. Utiliza table

let datos = [
    ["Rodrigo", 33],
    ["Rocio", 30]
]

console.table(datos)

// 5. Utiliza group

console.group("Usuario:")
console.log("Nombre: Rodrigo")
console.log("Edad: 33")
console.log("Ocupacion: Radiolgo")
console.groupEnd()

// 6. Utiliza time

console.time("Tiempo de ejecución 1")
for (let i = 0; i < 10000; i++) {
}
console.timeEnd("Tiempo de ejecución 1")


// 7. Valida con assert si un número es positivo

let numero = -1

console.assert(numero > 0, "El número debe ser positivo")

// 8. Utiliza count
console.count("Veces")
console.count("Veces")
console.count("Veces")
console.count("Veces")

// 9. Utiliza trace

function funcion1() {
    funcion2()
}

function funcion2() {
    funcion3()
}   

function funcion3() {
    console.trace()
}

funcion1()


// 10. Utiliza clear

console.clear()
console.info("Se ha limpiado la consola")
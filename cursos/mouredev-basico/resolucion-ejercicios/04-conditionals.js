// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Rodrigo"

if (nombre = "Rodrigo") {
    console.log("Tu nombre es " + nombre)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "rodrymza"
let pass = "4321"
let user_defined = "rodrymza"
let pass_defined = "1234"
if (user == user_defined && pass == pass_defined) {
    console.log("Acceso concedido")
} else {
    console.log("Error de ingreso")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = -2

if (numero > 0) {
    console.log("El numero es positivo")
} else if (numero < 0) {
    console.log("El numero es negativo")
} else {
    console.log("El numero es 0")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 17

if (edad >= 18) {
    console.log("Puedes votar")
} else {
    console.log("No puedes votar")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let etapa = edad > 18 ? "Adulto" : "Menor"

console.log(etapa)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 9

if (mes == 1 || mes == 2 || mes == 12) {
    console.log("Verano")
} else if (mes == 3 || mes == 4 || mes == 5) {
    console.log("Otoño")
} else if (mes == 6 || mes == 7 || mes == 8) {
    console.log("Invierno")
} else if (mes == 9 || mes == 10 || mes == 11) {
    console.log("Primavera")
} else {
    console.log("Mes invalido")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
    console.log("El mes tiene 31 dias")
} else if (mes == 2) {
    console.log("El mes tiene 28 dias")
} else if (mes < 1 || mes > 12) {
    console.log("Mes invalido")
} else {
    console.log("El mes tiene 30 dias")
}


// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma_seleccionado = "es"
let ingles = "en"
let espanol = "es"
let portugues = "br"

if (idioma_seleccionado = espanol) {
    console.log("Hola! Como estas?")
} else if (idioma_seleccionado = ingles) {
    console.log("Hello! How are you?")
} else if (idioma_seleccionado = portugues) {
    console.log("Oi, como voce esta?")
} else {
    console.log("Idioma seleccionado erroneo")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log("Verano")
        break
    case 3:
    case 3:
    case 5:
        console.log("Otoño")
        break
    case 6:
    case 7:
    case 8:
        console.log("Invierno")
        break
    case 9:
    case 10:
    case 11:
        console.log("Primavera")
        break
    default:
        console.log("Mes invalido")

}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Mes con 31 dias")
        break
    case 2:
        console.log("Mes con 28 dias")
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Mes con 30 dias")
        break
    default:
        console.log("Mes erroneo")
}
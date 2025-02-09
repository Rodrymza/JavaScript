/* Nivel 1: Básico

Calculadora Simple

Crea un programa que solicite al usuario dos números y una operación (+, -, *, /) y muestre el resultado.

 */

function operacionMatematica(num1, num2, operacion) {
    switch (operacion) {
        case "suma":
            return num1 + num2
        case "resta":
            return num1 - num2
        case "multiplicacion":
            return num1 * num2
        case "division":
            return num1 / num2
        default:
            return 'Operación no válida'
    }
}

function selecionarOperacion() {
    let operaciones = ["suma", "resta", "multiplicacion", "division"]
    while (true) {
        console.group("Seleccione operacion")
        console.log("1. Suma")
        console.log("2. Resta")
        console.log("3. Multiplicación")
        console.log("4. División")
        console.groupEnd()
        let operacion = parseInt(prompt('Introduce el número de la operación que deseas realizar'));
        if (operacion > 0 && operacion < 5) {
            return operaciones[operacion - 1]
        } else {
            console.log('Operación no válida')
        }
    }
}

/* let num1 = parseInt(prompt('Introduce el primer número'));
let num2 = parseFloat(prompt('Introduce el segundo número')); */

let operacion = selecionarOperacion()

console.log(`El resultado de la operación es: ${operacionMatematica(num1, num2, operacion)}`)

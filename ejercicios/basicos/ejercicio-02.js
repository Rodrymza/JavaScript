/* Clasificación de Números

Pide un número y determina si es positivo, negativo o cero. */

function clasificacionDeNumeros(numero) {
    if (numero > 0) {
        return 'El número es positivo'
    } else if (numero < 0) {
        return 'El número es negativo'
    } else {
        return 'El número es cero'
    }
}

//let numero = parseInt(prompt('Introduce un número'))
let numero = 0
console.log(clasificacionDeNumeros(numero))
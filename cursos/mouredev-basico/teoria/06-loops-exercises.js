// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let index = 0; index <= 20; index++) {
    console.log(index);

}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0;
for (let index = 1; index <= 100; index++) {
    suma += index;
}

console.log("La suma total de numeros del 1 al 100 es", suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

let numero = 0
while (numero <= 50) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
    numero++;
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombres = ["Rodrigo", "Andres", "Juan", "Pedro", "Maria", "Jose"];

nombres.forEach(element => {
    console.log(element)
});

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let texto = "Hola mundo";

let contador = 0;

for (let index = 0; index < texto.length; index++) {
    switch (texto[index]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            contador++;
            break;
        default:
            break;
    }
}
console.log("El total de vocales de la frase o palabra '" + texto + "' es " + contador);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numeros = [3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
let resultado = numeros[0]
for (let index = 1; index < numeros.length; index++) {
    resultado *= numeros[index];
}

console.log("El resultado de la multiplicacion de los numeros del array es", resultado);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let index = 1; index <= 10; index++) {
    console.log("5 x", index, "=", 5 * index);
}

// 8. Usa un bucle para invertir una cadena de texto

texto = "Buenos dias"
let nuevoTexto = ""

for (const letra of texto) {
    nuevoTexto = letra + nuevoTexto
    
}
console.log(nuevoTexto)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

contador = 1
let a = 0;
console.log("Numero " + contador + " de la secuencia de Fibonacci es", a);
let b = 1;
contador++;
console.log("Numero " + contador + " de la secuencia de Fibonacci es", b);
let c = 0
while (contador <= 10) {
    c = a + b;
    console.log("Numero " + contador + " de la secuencia de Fibonacci es", c);
    a = b;
    b = c;
    contador++

}
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let randomNumbers = [3, 4, 22, 1, 7, 9, 15, 10, 11, 1, 10, 14, 6, 73, 48, 9, 2]

let mayoresDiez = []

randomNumbers.forEach(numero => {
    if (numero > 10) {
        mayoresDiez.push(numero)
    }
});

console.log("Numeros mayores que diez", mayoresDiez)


//not aparte, utilizando for of
let nombre = "Rodrigo"

for (const letra of nombre) {
    console.log(letra)
}
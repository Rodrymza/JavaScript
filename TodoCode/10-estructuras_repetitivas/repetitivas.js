//// Estructuras Repetitivas en JavaScript

// 1. Bucle For
// Se utiliza para repetir un bloque de código varias veces.
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 2. Bucle While
// Se utiliza para repetir un bloque de código mientras se cumpla una condición.
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// 3. Bucle Do-While
// Se utiliza para repetir un bloque de código mientras se cumpla una condición.
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// 4. Bucle For-Of
// Se utiliza para recorrer los elementos de un arreglo o un objeto iterable.
const frutas = ['manzana', 'pera', 'plátano'];
for (const fruta of frutas) {
  console.log(fruta);
}

// 5. Bucle For-In
// Se utiliza para recorrer las propiedades de un objeto.
const persona = { nombre: 'Juan', edad: 30, ciudad: 'Madrid' };
for (const propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
}
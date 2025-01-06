//reccorer un array
let nombres = ["Juan", "Pedro", "Luis", "Ana", "Maria", "Sofia"];

//estructura for each
nombres.forEach(nombre => {
    console.log(nombre);
});

nombres.push("Rodrigo")     //agregar nombre al final

//estructura for basica

for (let index = 0; index < nombres.length; index++) {
    console.log(nombres[index])
}

console.log(nombres.join(", "))

// El método forEach es una estructura de control que permite recorrer un array y ejecutar una función para cada elemento.
// Sintaxis: array.forEach(callback)
// Donde callback es una función que se ejecuta para cada elemento del array.
// El callback puede recibir hasta tres parámetros: el valor del elemento, el índice del elemento y el array completo.
// Ejemplo:
nombres.forEach(function(nombre, indice, array) {
    console.log(`Nombre: ${nombre}, Índice: ${indice}, Array: ${array}`);
});

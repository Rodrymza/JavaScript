let numeros = []

for (let index = 1; index <21; index++) {
    numeros.push(index)
    
}
console.log(numeros)

//metodo que devuelve el tamaño del array
console.log("Tamaño del array: " + numeros.length)

//metodo que agrega un elemento al final del arreglo
numeros.push(22)

//metodo que elimina el ultimo elemento, puede guardarse en una variable
let numero_quitado = numeros.pop()
console.log("Se elimino el numero " + numero_quitado)

//metodo que devuelve un booleano que indica si el arreglo incluye un elemento determinado

numeros.includes(23)

//metodo que devuelve el indice del primer elemento que coincida con el valor especificado
console.log("Indice del primer elemento que coincide con el valor 10: " + numeros.indexOf(10))

//metodo que devuelve un booleano que indica si el arreglo incluye un elemento determinado
console.log("¿El arreglo incluye el elemento 23?: " + numeros.includes(23))

//metodo que devuelve un nuevo arreglo con los elementos del arreglo original en orden inverso
console.log("Arreglo en orden inverso: " + numeros.reverse())

//metodo que devuelve un nuevo arreglo con los elementos del arreglo original ordenados en orden ascendente
console.log("Arreglo ordenado en orden ascendente: " + numeros.sort((a, b) => a - b))

//metodo que devuelve un nuevo arreglo con los elementos del arreglo original ordenados en orden descendente
console.log("Arreglo ordenado en orden descendente: " + numeros.sort((a, b) => b - a))

//metodo que devuelve un nuevo arreglo con los elementos del arreglo original filtrados según una condición
console.log("Arreglo con elementos mayores que 10: " + numeros.filter(num => num > 10))

//metodo que devuelve un nuevo arreglo con los elementos del arreglo original mapeados según una función
console.log("Arreglo con elementos multiplicados por 2: " + numeros.map(num => num * 2))

//metodo que devuelve un valor que es el resultado de aplicar una función a cada elemento del arreglo
console.log("Suma de todos los elementos del arreglo: " + numeros.reduce((acum, num) => acum + num, 0))

//metodo que devuelve un valor que es el resultado de aplicar una función a cada elemento del arreglo
//El método reduce() aplica una función a cada elemento de un arreglo (desde izquierda a derecha) para reducirlo a un solo valor.
//El método reduce() no ejecuta la función para elementos de índices vacíos.
//El método reduce() no cambia el arreglo original.


//metodo que borra el primer elemento
let elemento_borrado = numeros.shift()
console.log("Primer elemento borrado: " + elemento_borrado)

/*
Clase 27 - Maps
Vídeo: https://youtu.be/1glVfFxj8a4?t=10755
*/

// Map

// Declaración

//explicame que es un map
//es una estructura de datos que nos permite almacenar datos de la forma clave-valor, similar a un objeto pero con algunas diferencias
//en un objeto las claves son strings o symbols, en un map pueden ser cualquier tipo de dato

let myMap = new Map()

console.log(myMap)  //salida: Map(0) {}

// Inicialiación
//como se inicializa un map
//se inicializa pasando una lista de datos, cada dato debe ser un array con dos elementos, el primer elemento es la clave y el segundo el valor
//no pueden haber repetidos en clave, el valor puede ser el mismo
myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap)

// Métodos y propiedades

// set
//agrega un elemento al map
myMap.set("alias", "mouredev")
myMap.set("name", "Brais Moure")

console.log(myMap)

// get
//devuelve el valor de una clave, si no existe devuelve undefined. 
console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has
//devuelve true si la clave existe, false si no. Similar a in en los objetos
console.log(myMap.has("surname"))
console.log(myMap.has("age"))

//Diferencia entre get y has, get devuelve undefined si no existe la clave, has devuelve false
//ambos son para claves, no para valores

console.log(myMap.get("surname"))    //devuelve undefined
console.log(myMap.has("surname"))    //devuelve false


// delete
//elimina un elemento del map, devuelve true si lo elimina y false si no lo encuentra
myMap.delete("email")

console.log(myMap)

// keys, values y entries

console.log(myMap.keys())       //devuelve un objeto iterable con las claves, salida: 
console.log(myMap.values())     //devuelve un objeto iterable con los valores, el tipo de dato es un objeto iterable (no un array)
console.log(myMap.entries())    //devuelve un objeto iterable con los pares clave-valor

// size
//devuelve el tamaño del map, como la funcion length en los arrays
console.log(myMap.size)

// clear
//borra todos los elementos del map
myMap.clear()

console.log(myMap)




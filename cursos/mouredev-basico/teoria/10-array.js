/*
Clase 25 - Arrays
Vídeo: https://youtu.be/1glVfFxj8a4?t=8741
*/

// Array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3) //aqui crea un array con 3 espacios vacios

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4] 
myArray2 = new Array(1, 2, 3, 4)    //en este caso crea un array con los elementos dentro del parentesis

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Brais"
// myArray2[0] = "Moure"
myArray2[1] = "mouredev"
myArray2[4] = "mouredev"    //aqui quedaria un elemento vacio entre el indice 2 y 4

console.log(myArray2)

myArray = []
myArray[2] = "Brais"
// myArray[0] = "Moure"
myArray[1] = "mouredev"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

myArray.push("Brais")   //agrega un elemento al final del array
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift())    //elimina el primer elemento del array y lo trae al igual que le pop
console.log(myArray)

myArray.unshift("Brais", "mouredev")    // El método unshift agrega uno o más elementos al inicio de un array y devuelve
                                        //la nueva longitud del array.

myArray.unshift("Brais", "mouredev")    //agrega mas de un elemento
console.log(myArray)
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []    //aqui se borran todos todos lo elementos creando nuevamente un array vacio
myArray.length = 0 // alternativa, se coloca el array con tamaño 0
console.log(myArray)

// slice

myArray = ["Brais", "Moure", "mouredev", 37, true]

let myNewArray = myArray.slice(1, 3)   //devuelve una parte del array entre los indices indicados

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 3)    //// splice

// El método splice() cambia el contenido de un array eliminando o reemplazando elementos existentes y/o agregando nuevos elementos en su lugar.

myArray = ["Brais", "Moure", "mouredev", 37, true]

// Eliminar elementos
myArray.splice(1, 2)    // Elimina 2 elementos a partir del índice 1
console.log(myArray)

// Reemplazar elementos
myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray.splice(1, 2, "Nueva entrada")    // Reemplaza 2 elementos a partir del índice 1 con "Nueva entrada"
console.log(myArray)

// Agregar elementos
myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray.splice(1, 0, "Nueva entrada")    // Agrega "Nueva entrada" en el índice 1 sin eliminar elementos
console.log(myArray)

// Eliminar y reemplazar elementos
myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray.splice(1, 2, "Nueva entrada 1", "Nueva entrada 2")    // Reemplaza 2 elementos a partir del índice 1 con dos nuevos elementos
console.log(myArray)

//el primer parametro indica el indice a partir de donde se realiza la modificacion, el segundo la cantida de elementos que se boraran, y el tercero los elementos que se 
//colocaran en el array en el indice indicado en el primer parametro

myArray = ["Brais", "Moure"]
console.log(myArray)

myArray = ["Brais", "Moure", "mouredev", 37, true]

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)
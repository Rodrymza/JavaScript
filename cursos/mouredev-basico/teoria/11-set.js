/*
Clase 26 - Sets 
Vídeo: https://youtu.be/1glVfFxj8a4?t=9952
*/

// Set

// Declaración

let mySet = new Set()   //debe crearse con la palabra reservada new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])    //debe pasarse una lista de datos, si pasamos una string se hara un set de caracteres

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://moure.dev")  //agrega un elemento al set

console.log(mySet)

mySet.delete("https://moure.dev")   //elimina un elemento del set, retorna true si lo elimina y false si no lo encuentra

console.log(mySet)  

console.log(mySet.delete("Brais"))  //elimina el elemento y retorna true
console.log(mySet.delete(4))        //no lo encuentra y retorna false

console.log(mySet)

// has

console.log(mySet.has("Moure")) //devuelve true si el elemento esta en el set
console.log(mySet.has("Brais"))

// size

console.log(mySet.size)  //devuelve el tamaño del set, como la funcion length en los arrays

// Convertir un set a array
let myArray = Array.from(mySet)     //convierte un set a un array
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)    //convierte un array a un set
console.log(mySet)

// No admite duplicados
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("BraisMoure@mouredev.com")
console.log(mySet)

//agregar elementos duplicados de distinto tipo

mySet.add(7);
mySet.add("7");
console.log(mySet);


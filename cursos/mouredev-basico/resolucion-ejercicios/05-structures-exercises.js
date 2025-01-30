// 1. Crea un array que almacene cinco animales
let animals = ["gato", "perro", "pez", "tigre", "leon"]

// 2. Añade dos más. Uno al principio y otro al final

animals.unshift("elefante")
animals.push("jirafa")
console.log(animals)

// 3. Elimina el que se encuentra en tercera posición

animals.splice(2, 1)

// 4. Crea un set que almacene cinco libros

let books = new Set(["Cien años de soledad", "It", "El señor de los anillos", "El codigo Da Vinci", "El principito"])

// 5. Añade dos más. Uno de ellos repetido

books.add("Cien años de soledad")
books.add("Don Quijote de la Mancha")

console.log(books)

// 6. Elimina uno concreto a tu elección

books.delete("El codigo Da Vinci")

// 7. Crea un mapa que asocie el número del mes a su nombre

let months = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

let mes = 13
if (months.get(mes)) {
    console.log("El mes 5 corresponde a", months.get(5))
} else {
    console.log("No existe el mes", mes)
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano

months.set("Verano", ["Diciembre", "Enero", "Febrero"])
console.log(months)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray = ["Rodrigo", "Ramirez", "33", "rodrymza"]

let mySet = new Set(myArray)

let myMap = new Map([["Datos", mySet]])


console.log(myMap)
/*
Clase 31 - Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=12829
*/

// Funciones

// Simple

function myFunc() {
    console.log("¡Hola, función!")
}

for (let i = 0; i < 5; i++) {
    myFunc()
}

// Con parámetros

function myFuncWithParams(name) {
    console.log(`¡Hola, ${name}!`)
}

myFuncWithParams("Brais")
myFuncWithParams("MoureDev")

// Funciones anónimas
// Son funciones que no tienen nombre

const myFunc2 = function (name) {
    console.log(`¡Hola, ${name}!`)
}

myFunc2("Brais Moure")

// Arrow functions
// Son una forma más corta de escribir funciones anónimas


const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)
}

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`)

myFunc3("Brais Moure")
myFunc4("Brais Moure")

// Parámetros

function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)
sum(5)
sum()

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

// Por defecto

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(b = 5)

// Retorno de valores

function mult(a, b) {
    return a * b
}

let result = mult(5, 10)
console.log(result)

// Funciones anidadas
//Son funciones que se declaran dentro de otras funciones

function extern() {
    console.log("Función externa")
    function intern() {
        console.log("Función interna")
    }
    intern()
}

extern()
// intern() Error: fuera del scope

// Funciones de orden superior
// Funciones de orden superior son funciones que reciben funciones como argumentos o devuelven funciones, o ambas cosas
//Se utilizan para abstraer lógica

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "función de orden superior")

// forEach
// forEach es un método que recorre un array y ejecuta una función por cada elemento
// El método forEach() ejecuta la función proporcionada una vez por cada elemento en el array
// El método no devuelve ningún valor y no puede ser detenido

let myArray = [1, 2, 3, 4]

let mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

let myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))
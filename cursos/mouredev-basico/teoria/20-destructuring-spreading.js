/*
Clase 35 - Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=15747
*/

//es un manera de extraer valores de objetos y arrays, y asignarlos a variables (a varias)

let myArray = [1, 2, 3, 4]

let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

let myValue = myArray[1]
console.log(myValue)

//myArray.push(5)
let myName = person.name
console.log(myName)

// Desestructuración

// Sintaxis arrays

let [myValue0, myValue1, myValue2, myValue3] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// Sintaxis arrays con valores predeterminados
//en caso de no encontrar un valor se asigna la variable predeterminada

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// Ignorar elementos array
//en este caso se ignoran las posiciones donde no se asigna variable

let [myValue10, , , myValue13] = myArray
console.log(myValue10)
console.log(myValue13)

// Sintaxis objects

let { name, age, alias } = person
console.log(name)
console.log(age)
console.log(alias)

// Sintaxis objects con valores predeterminados
//las variables deben tener el mismo nombre de la propiedad, se puede asignar un valor predeterminado como con arrays
//si no encuentra el nombre de la propiedad lo va a devolver como undefined

let { name2, age2, alias2, email = "email@email.com" } = person
console.log(name2) // No existe
console.log(age2)  // No existe
console.log(alias2)  // No existe
console.log(email)

// Sintaxis objects con nuevos nombres de variables
//esta es la notacion para sacar las propiedades con otro nombre de variable

let { alias: alias3, name: name3, age: age3 } = person
console.log(name3)
console.log(age3)
console.log(alias3)

// Objects anidados

let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log(`La persona de ${this.age} años de experiencia trabaja.`)
        }
    }
}

let { name: name4, job: { name: jobName } } = person3

console.log(name4)
console.log(jobName)

// Propagación (...)
//sirve para hacer una copia

// Sintaxis arrays

let myArray2 = [...myArray, 5, 6]   //copia los primeros valores y agrega los demas

console.log(myArray2)

// Copia de arrays

// let myArray3 = myArray  -> en este caso estaria igualando la referencia, no haciendo la copia
let myArray3 = [...myArray]

console.log(myArray3)

// Combinación de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]

console.log(myArray4)

// Sintaxis objects

let person4 = { ...person, email: "braismoure@mouredev.com" }   //la misma manera que funciona con los arrays, asigna las mismas propiedades mas las agregadas al final

console.log(person4)

// Copia de objects

let person5 = { ...person } //aqui se copia el objeto

console.log(person5)
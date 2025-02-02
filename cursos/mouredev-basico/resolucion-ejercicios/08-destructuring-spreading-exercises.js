/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let listaNombres = ["Juan", "Rodrigo", "Clara", "Rocio", "Gisela"]

let [primerNombre, segundoNombre] = listaNombres

console.log(primerNombre)
console.log(segundoNombre)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [ , , , , , nombrePredeterminado = "Predeterminado"] = listaNombres

console.log(nombrePredeterminado)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let person = {
    name : "Rodrigo",
    age : 33, 
    job : {
        name: "Radiologo",
        exp: 9
    }
}

let {name, age} = person 

console.log(name, age)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {name: nombre, age: edad} = person 

console.log(nombre, edad)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let alumno = {
    nombre: "Rodrigo",
    edad: 33, 
    nota_matematica : {
        nombre : "Matematica",
        puntaje: 86,
        profesor : "Perez"
    }
}

let {nota_matematica : { puntaje: nota , nombre: nombre_nota} } = alumno
console.log(nombre_nota, nota )

// 6. Usa propagación para combinar dos arrays en uno nuevo

let arrayUno = [1,2,3,4]
let arrayDos = [5,6,7,8]

let sumaArrays = [...arrayUno, ...arrayDos]

console.log(sumaArrays)

// 7. Usa propagación para crear una copia de un array

let arrayCopia = [...arrayUno]

console.log(arrayCopia)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let objetoUno = {
    nombre : "Moto",
    marca : "Zanella"

}

let objetoDos = {
    cilindrada : "200cc",
    anio: "2019" 
}

let moto = {...objetoUno, ...objetoDos}

console.log(moto)

// 9. Usa propagación para crear una copia de un objeto

let motoCopia = {...moto}
console.log(motoCopia)

console.log(moto == motoCopia)

// 10. Combina desestructuración y propagación

let {nombre: nombre_moto, anio: anio_moto} = moto

moto_nueva = {
    nombre: nombre_moto,
    anio: anio_moto
}

moto_definitiva = {...moto_nueva, marca: "Motomel", cilindrada: "250cc"}

console.log(moto_definitiva)

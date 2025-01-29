let palabra = "Rodrigo"
let fragmento = palabra.slice(0, 5)

console.log("El largo de la palabra es de " + palabra.length)

console.log(fragmento)

let frutas = "manzana, banana, tomate, lechuga, tomate"

let lista_frutas = frutas.split(",")

console.log(lista_frutas)

let frase = "Adios mundo cruel"

let frase_cortada = frase.substr(0, 5)
// El método substr() ya no se recomienda usar porque es obsoleto y puede ser eliminado en futuras versiones de JavaScript. En su lugar, se recomienda usar el método slice() o substring() para obtener una subcadena de una cadena de texto.

frase_cortada_2 = frase.substring(0, 5)

console.log(frase_cortada)
console.log(frase_cortada_2)


//metodos para todo mayusculas o minusculas

let texto = "Hola mundo"
let texto_mayusculas = texto.toUpperCase()
let texto_minusculas = texto.toLowerCase()

console.log(texto_mayusculas)
console.log("ahora en minusculas " + texto_minusculas)

//concatenacion  

let nombre = "Rodrigo"
let apellido = "Ramirez"

let nombre_completo = nombre.concat(", ", apellido)

console.log(nombre_completo)

//indexOf

let frase_libro = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme"

let indice_palabra_nombre = frase_libro.indexOf("zarate")

if (indice_palabra_nombre != -1) {
    console.log("La palabra 'nombre' se encuentra en el indice " + indice_palabra_nombre)
} else {
    console.log("No se encontro la palabra buscada en la frase")
}
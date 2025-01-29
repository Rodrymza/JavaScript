// 1. Concatena dos cadenas de texto
let nombre = "Rodrigo"
let saludo = "Hola"

let cadena = saludo + ", " + nombre
console.log(cadena)
// 2. Muestra la longitud de una cadena de texto

console.log("Longitud de cadena nombre")
console.log(nombre.length)

// 3. Muestra el primer y último carácter de un string

console.log("Primer y ultimo caracter")
console.log(nombre[0])
console.log(nombre[nombre.length-1])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(nombre.toUpperCase())
console.log(nombre.toLocaleLowerCase())

// 5. Crea una cadena de texto en varias líneas

let cadena_multilinea = "Habia una vez " +
                        "\ntruz con un del" +
                        "\nfin"

console.log(cadena_multilinea)

// 6. Interpola el valor de una variable en un string

let saludo_dos = `${saludo} mi nombre es ${nombre}` 
console.log(saludo_dos)

// 7. Reemplaza todos los espacios en blanco de un string por guiones


console.log(saludo_dos.replaceAll(" ", "_"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(cadena_multilinea.includes("una"))

// 9. Comprueba si dos strings son iguales

console.log(nombre.toLowerCase() == "rodrigo")

// 10. Comprueba si dos strings tienen la misma longitud

let nombre_dos = "Juan"

console.log(nombre.length == nombre_dos.length)
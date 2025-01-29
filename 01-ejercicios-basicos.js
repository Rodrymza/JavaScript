// 1. Escribe un comentario en una línea

//esto es un comentario en una linea

// 2. Escribe un comentario en varias líneas

/*esto 
es un 
comentario en varias lineas*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let numero = 2          //integer
let nombre = "Rodrigo"  //string
let boolean = true      //boolean
let decimal = 1.22
let bigInt = BigInt(22343243242342342343234234)
let varNull = null
let simbolo = Symbol("JS")

// 4. Imprime por consola el valor de todas las variables

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof numero)
console.log(numero)

console.log(typeof nombre)
console.log(nombre)

console.log(typeof boolean)
console.log(boolean)

console.log(typeof decimal)
console.log(decimal)

console.log(typeof bigInt)
console.log(bigInt)

console.log(typeof varNull)
console.log(varNull)

console.log(typeof simbolo)
console.log(simbolo)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

numero = 223
nombre = "Rocio"
boolean = false
decimal = 123.2342
bigInt = 1312312312312133132n


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

numero = false
nombre = BigInt(2323423)
boolean = 12
decimal = null
varNull = 1212.33

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const nombreConst = "javascript"
const numeroConst = 332
const booleanConst = true
const decimalConst = 0.23
const bigIntConst = BigInt(12322)
const nullConst = null

// 9. A continuación, modifica los valores de las constantes

 try {
    nombreConst = "rodrigo"

 } catch {
    console.log("Las constantes no puede modificarse")
 }

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

var nombre_var = "Juan"
//variable global, esta disponible en todo el codigo

let nombre_let = "Pedro"
//variable let, solo disponible en el bloque donde se declaro
//alcance por bloque

const nombre_const = "Maria"
//variable const, no se puede cambiar su valor
//alcance por bloque

if (true) {
    var nombre = "Variable global"
}
console.log(nombre)

if (true) {
    let variable_let = "Variable global"
    console.log(variable_let)
}


try {
    console.log(variable_let)
} catch (error) {
    console.log("Error: La variable no está definida")
}
//Aqui aparecera un error ya que la variable fue declarada dentro de un bloque y solo puede accederse a ella dentro de ese bloque

const constante = "variable constante"

try {
    constante = "nuevo valor"
} catch (error) {
    console.log("Error: La variable no puede modificarse")
}
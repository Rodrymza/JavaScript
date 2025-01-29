//ingresar dos numeros por un prompt, realizar la resta entre los dos valores
//si el numero es mayor a 0 dejar un mensaje diciendolo
//mostrar otro mensaje mostrando si es par o impar

function esPar(numero) {
 return numero % 2 == 0 ? "El numero es par" : "El numero es impar"
}

function esMayorCero(numero) {
    
    return numero > 0 ? "El número es mayor a 0" : "El número es menor o igual a 0"
}

numero_uno = parseInt(prompt("Ingresa un numero"))
numero_dos = parseInt(prompt("Ingresa otro numero"))

resultado = numero_uno - numero_dos

mensaje_uno = esPar(resultado)
mensaje_dos = esMayorCero(resultado)

console.log("El resultado de " + numero_uno + " - " + numero_dos + " es " + resultado)
console.log(mensaje_uno)
console.log(mensaje_dos)

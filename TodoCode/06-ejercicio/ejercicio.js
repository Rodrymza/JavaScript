//Un restaurante esta a punto de calcular la cuenta de un comensal al cual se le suma por separado 2800 + 1300 de comida y 900 + 650 de bebida
//Crear un programa en JS que calcule el total de comida, bebida y el completo de la cena y lo muestre por consola

let comida_uno = 2800
let comida_dos = 1300
let total_comida = comida_uno + comida_dos

console.log("El total gastado en comida es de $", total_comida)

let bebida_uno = 900
let bebida_dos = 650
let total_bebida = bebida_uno + bebida_dos

console.log("El total gastado en bebida es de $", total_bebida)

let total_gastado = total_comida + total_bebida


console.log("El total gastado en la cena es de $", total_gastado)
alert("El total gastado en la cena es de $" + total_gastado)

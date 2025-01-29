let numero_uno = prompt("Ingrese un numero")
let numero_dos = prompt("Ingrese otro numero")

if (numero_uno > numero_dos) {
    alert(numero_uno + " es mayor que " + numero_dos)
} else if (numero_dos > numero_uno) {
    alert(numero_dos + " es mayor que " + numero_uno)
} else {
    alert("Ambos numeros son iguales")
}
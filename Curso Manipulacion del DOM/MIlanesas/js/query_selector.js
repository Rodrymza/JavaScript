//permite seleccionar el primer elemento que cumpla un criterio mientras que querySelectorAll selecciona todos los elementos que cumplen el criterio

//tener en cuenta que los id se denotan primero con '#'
const pollo = document.querySelector("#pollo")
console.log(pollo)

const tipo = document.querySelector(".tipo.fondo-naranja")
console.log(tipo)

const primer_elemento_no_marron = document.querySelector("ul li:not(.fondo-marron)")
console.log(primer_elemento_no_marron)

const lista_total = document.querySelectorAll(".tipo")
console.log(lista_total)
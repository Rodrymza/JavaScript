const tipos = document.getElementsByClassName("tipo")
console.log(tipos)

/*
for (const tipo of tipos) {
    tipo.addEventListener('click', mostrarClick) //no se colocan los parentesis
}

function mostrarClick(e) {
    console.log(e.target.innerText)
}

*/

//Se puede tambien definir directamente la funcion flecha en el event listener


for (const element of tipos) {
   element.addEventListener('click', (e) => {
    console.log(e.target.innerText)
   })
}
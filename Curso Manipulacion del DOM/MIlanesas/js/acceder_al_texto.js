const lista = document.getElementById("lista-milanesas")

console.log("InnerText")
console.log(lista.innerText)

console.log("TextCotent")
console.log(lista.textContent)

//textContent muestra tambien la indentacion del texto original dento del archivo html, mientras que innerText solo muestra el texto, sin los demas elementos

console.log("innerHTML")
console.log(lista.innerHTML)
//esto muestra el fragmento conpleto del archivo html correspondiente al objeto seleccionado

const titulo = document.getElementById("titulo")
console.log(titulo.innerText)
titulo.innerText = "🍴 \nMis milanesas favoritas"
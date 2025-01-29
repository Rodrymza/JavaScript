const boton = document.querySelector("button")
const texto = document.getElementById("texto")

boton.addEventListener("click", (e) => {
    texto.textContent = "El contenido del texto se cambio a traves de JavaScript con el boton"
    console.log(e.target.innerText)
})



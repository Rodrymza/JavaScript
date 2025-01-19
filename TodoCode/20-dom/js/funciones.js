function cambiar_texto() {
    let parrafo = document.getElementById("mi_parrafo");
    parrafo.textContent = "Se cambio el texto con el boton";
    parrafo.style.fontSize = "24px";
    parrafo.style.color = "red";
    console.log(parrafo)
}
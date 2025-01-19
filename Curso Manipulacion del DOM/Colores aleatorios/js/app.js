const boton = document.querySelector('button');
const color = document.getElementById('color')

function generarColorHex() {
  let digitos = '1234567890ABCDEF'
  let colorHex = "#"

  for (let index = 0; index < 6; index++) {
    let indiceAleatorio = Math.floor(Math.random() * 16);
    colorHex += digitos[indiceAleatorio]
  }
  return colorHex
}

boton.addEventListener("click", function() {
  let colorAleatorio = generarColorHex();
  color.textContent = colorAleatorio;
  document.body.style.backgroundColor = colorAleatorio;
  console.log(document.body.backgroundColor)
})
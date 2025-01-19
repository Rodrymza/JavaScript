//para seleccionar todos los elementos con una etiqueta especifica
// Seleccionar todos los elementos con la etiqueta "li"

const lista = document.getElementsByTagName("li")

console.log(lista)

//tambien trae una coleccion de elementos en un array
// Seleccionar todos los elementos con la clase "fondo-marron"

const tipoFondoMarron = document.getElementsByClassName("fondo-marron")
console.log(tipoFondoMarron)

// Los métodos utilizados anteriormente son:
// 1. getElementsByTagName(): Este método devuelve una colección de elementos con el nombre de etiqueta especificado.
// 2. getElementsByClassName(): Este método devuelve una colección de elementos con el nombre de clase especificado.

// Cuando se seleccionan varios elementos, los métodos getElementsByTagName() y getElementsByClassName() devuelven una colección de elementos, conocida como HTMLCollection.

// Esta colección se puede recorrer utilizando un bucle for o forEach, para acceder a cada elemento individualmente.

// Por ejemplo, si queremos cambiar el estilo de fondo de todos los elementos con la clase "fondo-marron", podemos hacer lo siguiente:

for (let i = 0; i < tipoFondoMarron.length; i++) {
  tipoFondoMarron[i].style.background = "brown";
}

// O utilizando forEach:

Array.from(tipoFondoMarron).forEach(elemento => {
  elemento.style.background = "brown";
});
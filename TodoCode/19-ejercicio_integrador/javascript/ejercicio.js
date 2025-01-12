const listaNombres = ["Juan", "Maria", "Pedro", "Ana", "Luis"];

const nombres_minusculas = listaNombres.join(",").toLowerCase().split(",");

console.log("Nombres en minusculas: " + nombres_minusculas)
console.log("Lista de nombres: " + listaNombres.join(", "))

let nombre_ingresado = prompt("Ingresa un nombre")
console.log("Nombre ingresado: " + nombre_ingresado)

let indice = nombres_minusculas.indexOf(nombre_ingresado)
console.log(indice)

if (indice != -1) {
    alert("El nombre ingresado ya existe en la lista, en la posicion " + indice);
} else {
    alert("No se encontro el nombre en la lista de nombres")
}


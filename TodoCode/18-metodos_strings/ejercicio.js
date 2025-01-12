//hacer que indexof busque sin tener en cuenta mayusculas y minusculas

let fraseLibro = "El resplandor de Stephen King es un libro de terror";

let indice = fraseLibro.toLowerCase().indexOf("king")
// El método toLowerCase() devuelve una cadena con todos los caracteres convertidos a minúsculas.
// No modifica la variable original, sino que devuelve una nueva cadena con los cambios aplicados.
// Por lo tanto, la variable original fraseLibro sigue siendo la misma.

console.log(indice)

console.log(fraseLibro)

//metodo includes
// El método includes() devuelve true si una cadena se encuentra en otra cadena, caso contrario devuelve false

let incluye_palabra = fraseLibro.includes("libro")

console.log(incluye_palabra)
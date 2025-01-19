
// Para agregar un elemento nuevo con JavaScript, se sigue el siguiente proceso:
// 1. Se selecciona el elemento padre donde se agregará el nuevo elemento.
// 2. Se crea el nuevo elemento utilizando document.createElement().
// 3. Se le agrega contenido y estilos al nuevo elemento.
// 4. Se utiliza el método append() para agregar el nuevo elemento al padre.

// En este ejemplo, se agrega un nuevo elemento 'li' a la lista de tipos de milanesas.
const lista_tipos = document.getElementById("lista-milanesas")

const nuevo_tipo = document.createElement("li")
nuevo_tipo.classList.add("tipo", "fondo-naranja")
nuevo_tipo.innerText = "Milanesa de zapallo"

lista_tipos.append(nuevo_tipo)

// El método appendChild() agrega un nuevo nodo hijo al final de la lista de hijos de un nodo padre.
// A diferencia de append(), appendChild() solo acepta un nodo como argumento, no un string o un número.
// Si se intenta agregar un nodo que ya existe en el documento, este será removido de su ubicación actual y agregado al nuevo padre.
// En este ejemplo, se agrega el nuevo elemento 'li' a la lista de tipos de milanesas utilizando appendChild().
lista_tipos.appendChild(nuevo_tipo)
lista_tipos.append("hola mundo") //esto agrega texto plano, no es parte de otro elemento html
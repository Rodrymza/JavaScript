// Para eliminar un elemento existente con JavaScript, se sigue el siguiente proceso:
// 1. Se selecciona el elemento que se desea eliminar.
// 2. Se utiliza el método remove() para eliminar el elemento seleccionado.

// En este ejemplo, se elimina el último elemento 'li' de la lista de tipos de milanesas.

//const lista_tipos = document.getElementById("lista-milanesas") -> esta constante ya estaba declarada en el archivo de crear elemento
const ultimo_tipo = lista_tipos.firstElementChild

ultimo_tipo.remove()
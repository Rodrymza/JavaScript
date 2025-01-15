export default class Articulo {
    constructor(numero, nombre, precio) {
        this.numero = numero
        this.nombre = nombre
        this.precio = precio
    }
    getNumero() {
    return this.numero
}

setNumero(numero) {
    this.numero = numero
}

getNombre() {
    return this.nombre
}

setNombre(nombre) {
    this.nombre = nombre
}

getPrecio() {
    return this.precio
}

setPrecio(precio) {
    this.precio = precio
}
}
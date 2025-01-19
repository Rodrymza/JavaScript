import { Administrador, Cliente } from "./usuario"
function agregar_administrador() {
    let nombre = prompt("Ingrese nombre del usuario")
    let mail = prompt("Ingrese mail del usuario")
    
    const nuevo_adnimistrador = new Administrador(nombre, mail, "Administrador")
    return nuevo_adnimistrador
}

function agregar_cliente() {
    let nombre = prompt("Ingrese nombre del usuario")
    let mail = prompt("Ingrese mail del usuario")
    
    const nuevo_cliente = new Cliente(nombre, mail, "Cliente")
    return nuevo_cliente
}


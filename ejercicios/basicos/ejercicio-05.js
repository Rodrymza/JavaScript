/* Gestión de Contactos

Crea un array de objetos donde cada objeto represente un contacto con nombre, teléfono y email.

Agrega funciones para:

Agregar un nuevo contacto.

Buscar un contacto por nombre.

Mostrar todos los contactos. */

class Contacto {
    constructor(nombre, telefono, email) {
        this.nombre = nombre
        this.telefono = telefono
        this.email = email
    }
}

class Agenda {
    constructor() {
        this.contactos = []
    }


    agregarContacto(contacto) {
        this.contactos.push(contacto)
        console.log('Contacto agregado:', contacto.nombre)
    }

    static mostrarContactosStatic(contactos) {
        console.log('Contactos:')
        console.log('----------------')
        contactos.forEach(contacto => {
            console.log('Nombre:', contacto.nombre)
            console.log('Teléfono:', contacto.telefono)
            console.log('Email:', contacto.email)
            console.log('----------------')
        })
    }
    buscarPorNombre(nombre) {
        let filtrados = this.contactos.filter(contacto => contacto.nombre.toLowerCase().includes(nombre.toLowerCase()))
        Agenda.mostrarContactosStatic(filtrados)
    }

    mostrarContactos() {
        Agenda.mostrarContactosStatic(this.contactos)
    }



}


const agenda = new Agenda()

const contacto1 = new Contacto('Juan Perez', '123456789', 'juan.perez@example.com')
const contacto2 = new Contacto('Maria Lopez', '987654321', 'maria.lopez@example.com')
const contacto3 = new Contacto('Carlos Sanchez', '555555555', 'carlos.sanchez@example.com')

agenda.agregarContacto(contacto1)
agenda.agregarContacto(contacto2)
agenda.agregarContacto(contacto3)

//agenda.mostrarContactos()

agenda.buscarPorNombre("lopez")
export default class Usuario {
    constructor(nombre, mail, rol) {
        this._nombre = nombre;
        this._mail = mail;
        this._rol = rol;
    }
    
}

export class Administrador extends Usuario {
    constructor(nombre, mail, rol) {
        super(nombre, mail, rol)
    }
    mostrar_info() {
        alert("Usuario administrador")
    }
}

export class Cliente extends Usuario {
    constructor(nombre, mail, rol) {
        super(nombre, mail, rol)
    }
    mostrar_info() {
        alert("Cliente " + nombre + " mail: " + mail )
    }
}
export default class Cliente {
    constructor(cuil, nombre) {
        this._cuil = cuil
        this._nombre = nombre
    }
    get cuil() {
        return this._cuil;
    }

    set cuil(cuil) {
        this._cuil = cuil;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
}
export default class Factura {
    constructor(fecha, numero, letra, total, montoIva, cliente, detalleFactura) {
        this._fecha = fecha;
        this._numero = numero;
        this._letra = letra;
        this._total = total;
        this._montoIva = montoIva;
        this._cliente = cliente;
        this._detalleFactura = detalleFactura;
}

   
}

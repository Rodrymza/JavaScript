import Factura from './factura.js';
import Articulo from './articulo.js';
import Cliente from './cliente.js';
import { lista_articulos } from './data.js';
import { lista_clientes } from './data.js';

const tabla = document.getElementById("tablaArticulos").getElementsByTagName("tbody")[0];

function agregar_articulos_tabla() {
    lista_articulos.forEach(articulo => {
        // Crear una nueva fila
        const fila = document.createElement("tr");

        // Crear celdas para cada propiedad del artículo
        const celdaCodigo = document.createElement("td");
        celdaCodigo.textContent = articulo.numero;
        console.log(articulo.nombre)
        fila.appendChild(celdaCodigo);

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = articulo.nombre;
        fila.appendChild(celdaNombre);

        const celdaPrecio = document.createElement("td");
        celdaPrecio.textContent = `$${articulo.precio}`;
        fila.appendChild(celdaPrecio);

        // Agregar la fila a la tabla
        tabla.appendChild(fila);
    });
}

agregar_articulos_tabla()

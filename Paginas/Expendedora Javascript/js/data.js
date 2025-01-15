import Articulo from "./articulo.js"
import Cliente from "./cliente.js";

export const lista_articulos = [
  new Articulo(101, "Leche", 250),
  new Articulo(102, "Gaseosa", 300),
  new Articulo(103, "Fideos", 150),
  new Articulo(104, "Arroz", 280),
  new Articulo(105, "Vino", 1200),
  new Articulo(106, "Manteca", 200),
  new Articulo(107, "Lavandina", 180),
  new Articulo(108, "Detergente", 460),
  new Articulo(109, "Jabón en Polvo", 960),
  new Articulo(110, "Galletas", 600)
];

export const lista_clientes = [
  new Cliente("20110425417", "Rodolfo Fernandez"),
  new Cliente("30527419655", "Los Pollos Hnos"),
  new Cliente("27289425478", "Andrea Pereira"),
  new Cliente("33536549878", "Multimarca Repuestos"),
  new Cliente("20291122568", "Luis Peric")
];


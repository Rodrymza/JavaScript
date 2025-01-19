//// Manejo de eventos del DOM

// Agregar un evento a un elemento
elemento.addEventListener('evento', función);

// Ejemplo: agregar un evento de clic a un botón
const boton = document.getElementById('boton');
boton.addEventListener('click', function() {
  console.log('Se hizo clic en el botón');
});

// Tipos de eventos
// - Eventos de mouse: click, dblclick, mouseover, mouseout, mousemove
// - Eventos de teclado: keydown, keyup, keypress
// - Eventos de formulario: submit, reset, change, focus, blur
// - Eventos de ventana: load, unload, resize, scroll

// Propiedades del objeto evento
// - type: tipo de evento
// - target: elemento que disparó el evento
// - currentTarget: elemento que está manejando el evento
// - preventDefault(): evitar la acción predeterminada del evento
// - stopPropagation(): detener la propagación del evento

// Ejemplo: evitar la acción predeterminada de un enlace
const enlace = document.getElementById('enlace');
enlace.addEventListener('click', function(evento) {
  evento.preventDefault();
  console.log('Se hizo clic en el enlace, pero no se redirigió');
});

// Ejemplo: detener la propagación de un evento
const contenedor = document.getElementById('contenedor');
const elemento = document.getElementById('elemento');
contenedor.addEventListener('click', function() {
  console.log('Se hizo clic en el contenedor');
});
elemento.addEventListener('click', function(evento) {
  evento.stopPropagation();
  console.log('Se hizo clic en el elemento');
});
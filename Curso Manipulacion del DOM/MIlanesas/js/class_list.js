const titulo = document.getElementById("carne")
console.log(titulo.classList)

// La propiedad classList es una colección de clases de CSS que se aplican a un elemento HTML.
// Permite agregar, eliminar y togglear clases de CSS en un elemento.
// A continuación, se muestra un ejemplo de cómo utilizar la propiedad classList:

// Agregar una clase
titulo.classList.add("texto-mayuculas");

// Eliminar una clase
titulo.classList.remove("texto-mayusculas");

// Togglear una clase (agregar si no existe, eliminar si existe)
// Togglear una clase significa alternar entre agregar y eliminar una clase de CSS en un elemento.
// Si el elemento no tiene la clase, se agrega. Si el elemento ya tiene la clase, se elimina.
// A continuación, se muestra un ejemplo de cómo utilizar la propiedad toggle para alternar una clase:

// Togglear una clase
//titulo.classList.toggle("texto-mayusculas");

// Ejemplo práctico:
// Supongamos que tenemos un botón con la clase "activo" que cambia de color cuando se hace clic.
// Podemos utilizar toggle para alternar la clase "activo" cada vez que se hace clic en el botón.
// De esta manera, el botón cambiará de color cada vez que se hace clic.
titulo.classList.toggle("texto-mayusculas");

// Verificar si un elemento tiene una clase específica
if (titulo.classList.contains("nueva-clase")) {
  console.log("El elemento tiene la clase 'nueva-clase'");
}
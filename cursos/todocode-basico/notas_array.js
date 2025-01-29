// En JavaScript, los arrays se crean utilizando corchetes [] y separando los elementos con comas.

// Ejemplo de creación de un array:
let comida = [2800, 1300];

// Las funciones principales de los arrays en JavaScript son:

// 1. push(): Agrega un elemento al final del array.
comida.push(1500);

// 2. pop(): Elimina el último elemento del array y lo devuelve.
let ultimoElemento = comida.pop();

// 3. length: Devuelve la cantidad de elementos en el array.
let cantidadElementos = comida.length;

// 4. indexOf(): Devuelve el índice del primer elemento que coincide con el valor especificado.
let indice = comida.indexOf(1300);

// 5. splice(): Elimina o reemplaza elementos en el array.
comida.splice(1, 1);

// 6. join(): Convierte el array en una cadena de texto.
let cadena = comida.join(', ');

// 7. sort(): Ordena los elementos del array.
comida.sort((a, b) => a - b);

// 8. reverse(): Invierte el orden de los elementos del array.
comida.reverse();

// 9. forEach(): Ejecuta una función para cada elemento del array.
comida.forEach((elemento) => console.log(elemento));

// 10. map(): Crea un nuevo array con los resultados de ejecutar una función para cada elemento del array.
let nuevosElementos = comida.map((elemento) => elemento * 2);

// 11. filter(): Crea un nuevo array con los elementos que cumplen con una condición.
let elementosFiltrados = comida.filter((elemento) => elemento > 1000);

// 12. reduce(): Aplica una función a cada elemento del array y devuelve un valor único.
let suma = comida.reduce((acumulado, elemento) => acumulado + elemento, 0);

// 13. some(): Devuelve true si al menos un elemento del array cumple con una condición.
let hayElementosMayoresA1000 = comida.some((elemento) => elemento > 1000);

// 14. every(): Devuelve true si todos los elementos del array cumplen con una condición.
let todosElementosMayoresA1000 = comida.every((elemento) => elemento > 1000);

// 15. includes(): Devuelve true si el array incluye un elemento específico.
let incluye1300 = comida.includes(1300);
const lista_milanesas = document.getElementById("lista-milanesas")
console.log("Parent element")
console.log(lista_milanesas.parentElement); // Accede al elemento padre
console.log("elemento padre del padre")

console.log(lista_milanesas.parentElement.parentElement); // Accede al elemento padre del padre
console.log(lista_milanesas.children); // Accede a los elementos hijos
console.log(lista_milanesas.childNodes); // Accede a todos los nodos hijos (incluyendo texto y comentarios)
console.log(lista_milanesas.firstChild); // Accede al primer hijo
console.log(lista_milanesas.lastChild); // Accede al último hijo
console.log(lista_milanesas.nextSibling); // Accede al siguiente elemento hermano
console.log(lista_milanesas.previousSibling); // Accede al elemento hermano anterior

// Accede al elemento padre
lista_milanesas.parentElement;

// Accede al elemento padre del padre
lista_milanesas.parentElement.parentElement;

// Accede a los elementos hijos
lista_milanesas.children;

// Accede a todos los nodos hijos (incluyendo texto y comentarios)
lista_milanesas.childNodes;

// Accede al primer hijo
lista_milanesas.firstChild;

// Accede al último hijo
lista_milanesas.lastChild;

// Accede al siguiente elemento hermano
lista_milanesas.nextSibling;

// Accede al elemento hermano anterior
lista_milanesas.previousSibling;

// Accede al primer elemento hijo que sea un elemento (no un nodo de texto)
lista_milanesas.firstElementChild;

// Accede al último elemento hijo que sea un elemento (no un nodo de texto)
lista_milanesas.lastElementChild;

// Accede a todos los elementos hijos que sean elementos (no nodos de texto)
lista_milanesas.children;

// Accede al siguiente elemento hermano que sea un elemento (no un nodo de texto)
lista_milanesas.nextElementSibling;

// Accede al elemento hermano anterior que sea un elemento (no un nodo de texto)
lista_milanesas.previousElementSibling;

// Accede a todos los elementos descendientes que sean elementos (no nodos de texto)
lista_milanesas.querySelectorAll('*');

// Accede a todos los elementos descendientes que tengan una clase específica
lista_milanesas.querySelectorAll('.clase-especifica');

// Accede a todos los elementos descendientes que tengan un id específico
lista_milanesas.querySelector('#id-especifico');
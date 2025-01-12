```
// Métodos de strings en JavaScript

// 1. length: devuelve la longitud de la cadena
let cadena = "Hola mundo";
console.log(cadena.length); // 11

// 2. toUpperCase(): devuelve la cadena en mayúsculas
console.log(cadena.toUpperCase()); // HOLA MUNDO

// 3. toLowerCase(): devuelve la cadena en minúsculas
console.log(cadena.toLowerCase()); // hola mundo

// 4. trim(): elimina los espacios en blanco al inicio y al final de la cadena
let cadenaConEspacios = "   Hola mundo   ";
console.log(cadenaConEspacios.trim()); // Hola mundo

// 5. split(): divide la cadena en un arreglo de substrings
let cadenaParaDividir = "Hola,mundo,JavaScript";
console.log(cadenaParaDividir.split(",")); // ["Hola", "mundo", "JavaScript"]

// 6. join(): une un arreglo de substrings en una sola cadena
let arregloDeCadenas = ["Hola", "mundo", "JavaScript"];
console.log(arregloDeCadenas.join(" ")); // Hola mundo JavaScript

// 7. replace(): reemplaza una parte de la cadena por otra
let cadenaParaReemplazar = "Hola mundo";
console.log(cadenaParaReemplazar.replace("mundo", "JavaScript")); // Hola JavaScript

// 8. indexOf(): devuelve la posición de la primera aparición de una subcadena
let cadenaParaBuscar = "Hola mundo";
console.log(cadenaParaBuscar.indexOf("mundo")); // 5

// 9. lastIndexOf(): devuelve la posición de la última aparición de una subcadena
console.log(cadenaParaBuscar.lastIndexOf("mundo")); // 5

// 10. substring(): devuelve una subcadena de la cadena original
let cadenaParaExtraer = "Hola mundo";
console.log(cadenaParaExtraer.substring(0, 5)); // Hola

// 11. slice(): devuelve una subcadena de la cadena original
console.log(cadenaParaExtraer.slice(0, 5)); // Hola

// 12. concat(): une dos o más cadenas en una sola
let cadena1 = "Hola";
let cadena2 = "mundo";
console.log(cadena1.concat(" ", cadena2)); // Hola mundo

// 13. startsWith(): devuelve true si la cadena comienza con la subcadena dada
let cadenaParaComprobar = "Hola mundo";
console.log(cadenaParaComprobar.startsWith("Hola")); // true

// 14. endsWith(): devuelve true si la cadena termina con la subcadena dada
console.log(cadenaParaComprobar.endsWith("mundo")); // true

// 15. includes(): devuelve true si la cadena contiene la subcadena dada
console.log(cadenaParaComprobar.includes("JavaScript")); // false
```
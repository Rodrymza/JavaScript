// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a, b) {
  return a + b;
}

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function mayorNumero(array) {
  let max = array[0];
  array.forEach((element) => {
    element > max ? (max = element) : max;
  });
  return max;
}

let numeros = [1, 2, 3, 22, 5];
console.log(mayorNumero(numeros));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function contarVocales(cadena) {
  let vocales = 0;
  cadena.forEach((element) => {
    if (
      element == "a" ||
      element == "e" ||
      element == "i" ||
      element == "o" ||
      element == "u"
    ) {
      vocales++;
    }
  });
  return vocales;
}

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function aMayusculas(array) {
  let arrayMayusculas = [];
  for (const palabra of array) {
    arrayMayusculas.push(palabra.toUpperCase());
  }
  return arrayMayusculas;
}

let palabras = ["hola", "mundo", "rodrigo"];

let palabras_mayusculas = aMayusculas(palabras);
console.log(palabras_mayusculas);

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(num) {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(esPrimo(5));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function elementosComunes(array1, array2) {
  let arrayComun = [];
  array1.forEach((element) => {
    if (array2.includes(element)) {
      arrayComun.push(element);
    }
  });

  return arrayComun;
}

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumaPares(array) {
  const esPar = (numero) => numero % 2 == 0;
  let suma = 0;

  array.forEach((element) => {
    suma += esPar(element) ? element : 0;
  });
}

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function elevarCuadrado(array) {
  let arrayCuadrado = [];
  array.forEach((element) => {
    arrayCuadrado.push(element ** 2);
  });
  return arrayCuadrado;
}

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function invertirPalabra(palabra) {
  let palabraInvertida = "";

  for (const letra of palabra) {
    palabraInvertida = letra + palabraInvertida;
  }
  return palabraInvertida;
}

let listaPalabras = ["zapato", "medias", "ciruelas", "frutillas"]

let palabrasInvertidas = []

listaPalabras.forEach(palabra => {
  palabrasInvertidas.push(invertirPalabra(palabra))
});

console.log(palabrasInvertidas)

// 10. Crea una función que calcule el factorial de un número dado

function factorial(numero) {
    let factorial = 0;
    for (let i = 0; i <= numero; i++) {
        factorial += i;
    }
    return factorial
}

console.log(factorial(4))

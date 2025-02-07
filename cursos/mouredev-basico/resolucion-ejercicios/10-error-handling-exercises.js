// 1. Captura una excepción utilizando try-catch
let persona = {
  nombre: "Rodrigo",
  edad: 33,
};

try {
  console.log(persona.caminar());
} catch (error) {
  console.log("Se produjo un error:", error.message);
}

// 2. Captura una excepción utilizando try-catch y finally

try {
  console.log(persona.nombre);
} catch (error) {
  console.log("Se produjo un error:", error.message);
} finally {
  console.log("La ejecucion termino");
}

// 3. Lanza una excepción genérica

let user = "juan";
if (user != "rodry") {
  throw new Error("Usuario no valido");
}

// 4. Crea una excepción personalizada

class letrasMayusculas extends Error {
  constructor(message) {
    super(message);
  }
}

// 5. Lanza una excepción personalizada

let texto = "minusculas";
try {
  if (texto != texto.toUpperCase()) {
    throw new letrasMayusculas("El mensaje debe estar en mayusculas");
  } else {
    console.log("El mensaje está en mayúsculas");
  }
} catch (error) {
  if (error instanceof letrasMayusculas) {
    console.log("Se ha producido un error:", error.message);
  } else {
    console.log("Se ha producido un error:", error.message);
  }
}

// 6. Lanza varias excepciones según una lógica definida

let numero = 10;

try {
  if (numero > 5) {
    throw new Error("El numero es mayor a 5");
  } else if (numero < 0) {
    throw new Error("El es negativo");
  }
} catch (error) {
  if (error instanceof Error) {
    console.log("Se ha producido un error:", error.message);
  }
}

// 7. Captura varias excepciones en un mismo try-catch

function comprobarErrores(contrasenia) {
  if (contrasenia != "1234") {
    throw new Error("Contraseña incorrecta");
  }
  if (contrasenia.length < 8) {
    throw new Error("La contrasenia debe tener al menos 8 caracteres");
  }
  if ((contrasenia = null)) {
    throw new Error("La contraseña no puede ser nula");
  }
}

try {
  comprobarErrores("rodry");
  comprobarErrores("12");
  comprobarErrores(null);
} catch (error) {
  if (error instanceof Error) {
    console.log("Se ha producido un error:", error.message);
  }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

function verificarErrores(numero) {
  {
    if (Number.isNaN(numero)) {
      throw new Error("El valor no es un número");
    }
    if (numero == null) {
      throw new Error("El valor no puede ser nulo");
    }
    if (typeof numero === "string") {
      throw new Error("El valor no puede ser un string");
    }
    if (Array.isArray(numero)) {
      throw new Error("El valor no puede ser un array");
    }
    if (typeof numero !== "number") {
      throw new Error("El valor debe ser un número");
    }
    console.log(parseFloat(numero));
  }
}

function verificarOperacion(numero) {
  try {
    verificarErrores(numero);
    console.log("Operacion realizada efectivamente");
  } catch (error) {
    console.log("Se ha producido un error:", error.message + ":", numero);
  }
}

verificarOperacion(2);
verificarOperacion(null);
verificarOperacion("hola");
verificarOperacion([1, 2, 3]);
verificarOperacion({ nombre: "Rodrigo", edad: 33 });

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

function verificarPropiedad(objeto, propiedad) {
  if (!objeto.hasOwnProperty(propiedad)) {
    throw new Error(
      "El objeto no tiene la propiedad especificada:" + propiedad
    );
  }
  console.log("Valor de la propiedad:", objeto[propiedad]);
}

let objeto = {
  nombre: "Rodrigo",
  edad: 33,
};
try {
  verificarPropiedad(objeto, "nombre");
  verificarPropiedad(objeto, "apellido");
} catch (error) {
  console.log("Se ha producido un error:", error.message);
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function reintentar(texto) {
  let intentos = 1;
  while (intentos < 10) {
    try {
      if (texto.includes("http")) {
        console.log("El texto contiene 'http'");
        break;
      } else {
        throw new Error("El texto no contiene 'http'");
      }
    } catch (error) {
      console.log("Intento", intentos, "fallido:", error.message);
      //aqui deberia estar la solicitud cambio de texto, aunque no seria lo correcto tampoco, preferiria
      intentos++;
    }
  }
  if ((intentos = 10)) {
    console.log("Se alcanzó el máximo de intentos");
  }
}

reintentar("Rodrigo")

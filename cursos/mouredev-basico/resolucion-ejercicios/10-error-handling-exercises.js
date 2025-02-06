// 1. Captura una excepción utilizando try-catch
let persona = {
    nombre : "Rodrigo",
    edad: 33
}

try {
    console.log(persona.caminar())
} catch (error) {
    console.log("Se produjo un error:", error.message)
}

// 2. Captura una excepción utilizando try-catch y finally

try {
    console.log(persona.nombre)
} catch (error) {
    console.log("Se produjo un error:", error.message)
} finally {
    console.log("La ejecucion termino")
}

// 3. Lanza una excepción genérica

let user = "juan"
if (user != "rodry") {
    throw new Error("Usuario no valido");
}


// 4. Crea una excepción personalizada

class letrasMayusculas extends Error {
    constructor(message) {
        super(message)  
}

// 5. Lanza una excepción personalizada

let texto = "minusculas"
try {
    if (texto != texto.toUpperCase()) {
        throw new letrasMayusculas("El mensaje debe estar en mayusculas")
    } else {
        console.log("El mensaje está en mayúsculas")
    }
} catch (error) {
    if (error instanceof letrasMayusculas) {
        console.log("Se ha producido un error:", error.message)
    } else {
        console.log("Se ha producido un error:", error.message)
    }
}

// 6. Lanza varias excepciones según una lógica definida

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

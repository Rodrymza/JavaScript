/* Inversión de Palabras

Pide una palabra y devuelve la palabra al revés (Ejemplo: "hola" → "aloh"). */

function invertirPalabra(palabra) {
    let palabraInvertida = ""
    for (const indice in palabra) {
        palabraInvertida = palabra[indice] + palabraInvertida
    }
    return palabraInvertida
}
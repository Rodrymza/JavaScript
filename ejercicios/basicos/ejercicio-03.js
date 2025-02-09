/* Conteo de Números Pares

Muestra en consola todos los números pares del 1 al 50 usando un bucle. */
function numerosPares(inicio, fin) {
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

numerosPares(1, 50)

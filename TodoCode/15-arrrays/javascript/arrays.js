let mi_array = [1, 2, 3, 4, 5]

let mi_matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(typeof mi_array)
console.log(mi_array)

console.log(typeof mi_matriz)
console.log(mi_matriz)

let array_vacio = new Array(3)    //nuevo array con 3 posiciones, vacio
console.log(array_vacio.length)

let matriz_vacia = new Array(3)

for (let index = 0; index < matriz_vacia.length; index++) { //matriz con arrays vacios
    matriz_vacia[index] = new Array(3);   
}

console.log(array_vacio)
console.log(matriz_vacia)

let persona = ["Rodrigo", "Ramirez", 33]


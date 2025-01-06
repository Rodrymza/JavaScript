let frutas = ["manzana", "pera", "plátano", "naranja", "fresa", "mango", "kiwi", "piña", "sandía", "cereza"]

frutas_con_a = frutas.filter(fruta => fruta.includes("a"));

console.log(frutas)

console.log("Frutas con A:")
console.log(frutas_con_a)

let frutas_ordenadas = frutas.slice().sort()

let frutas_inverso = frutas_ordenadas.slice().reverse()


console.log("Array original: "  + frutas.join(", "))
console.log("Array ordenado: "  + frutas_ordenadas.join(", "))
console.log("Array inverso: "  + frutas_inverso.join(", "))
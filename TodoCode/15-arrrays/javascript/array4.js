let ciudades = ["mendoza", "catamarca", "san luis", "buenos aires", "san juan"]
ciudades.forEach(ciudad => {
    console.log(ciudad.toUpperCase())
});

let ciudades_con_e = ciudades.filter(ciudad => ciudad.includes("e"));

console.log(ciudades_con_e)
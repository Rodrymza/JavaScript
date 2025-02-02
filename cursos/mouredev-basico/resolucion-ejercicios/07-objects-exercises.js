// 1. Crea un objeto con 3 propiedades

let auto = {
    marca : "Ranault",
    puertas : 5,
    anio: 2019}

// 2. Accede y muestra su valor

console.log("Propiedades del objeto:")

console.log("Marca: " + auto.marca)
console.log("Año: " + auto["anio"])



// 3. Agrega una nueva propiedad

auto.motor = "1.6"

// 4. Elimina una de las 3 primeras propiedades

delete auto.puertas

// 5. Agrega una función e invócala

auto.arrancar = function() {
    console.log("El auto esta arrancando")
}

auto.arrancar()

// 6. Itera las propiedades del objeto

for (let key in auto) {
    console.log(key + ": " + auto[key])
}

// 7. Crea un objeto anidado

alumno = {
    nombre: "Rodrigo",
    edad: 33,
    trabajo: {
        nombre : "Radiologia",
        lugar: "Hospital Santa Isabel",
        antiguedad: 9
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas

for (const key in alumno.trabajo) {
        console.log(key + ": " + alumno.trabajo[key])
    }
        


// 9. Comprueba si los dos objetos creados son iguales

let auto_bis = {
    marca : "Ranault",
    puertas : 5,
    anio: 2019}

    console.log(auto == auto_bis) //resultado false, no son iguales

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(auto_bis.marca == auto.marca)
//las propiedades si van a ser las mismas, pero los objetos seran siempre dos diferentes aunque tengan las mismas propiedades
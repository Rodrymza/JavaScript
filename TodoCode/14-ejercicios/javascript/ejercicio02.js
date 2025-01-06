function obtener_dia(numero) {
    switch (numero) {
        case 0: return "Domingo"
        break;
        case 1: return "Lunes"
        break;
        case 2: return "Martes"
        break;
        case 3: return "Miércoles"
        break;
        case 4: return "Jueves"
        break;
        case 5: return "Viernes"
        break;
        case 6: return "Sabado"
    }
}

let input = prompt("Ingresa un fecha cualquiera", "mm/dd/aaaa")

let fecha = new Date(input)

let dia_semana = fecha.getDay()

alert("El dia de la semana de la fecha " + fecha.toLocaleDateString() + " es " + obtener_dia(dia_semana))
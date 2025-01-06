// mostrar la fecha actual a traves de una string con el mes en formato texto

function mes_a_texto(mes) {
    switch (mes) {
        case 0: return "Enero"
        break;
        case 1: return "Febrero"
        break;
        case 2: return "Marzo"
        break;
        case 3: return "Abril"
        break;
        case 4: return "Mayo"
        break;
        case 5: return "Junio"
        break;
        case 6: return "Julio"
        break;
        case 7: return "Agosto"
        break;
        case 8: return "Septiembre"
        break;
        case 9: return "Octubre"
        break;
        case 10: return "Noviembre"
        break;
        case 11: return "Diciembre"
        break;
    }
}


let fecha = new Date()

mes_actual = fecha.getMonth()
dia_actual = fecha.getDate()
anio_actual = fecha.getFullYear()

console.log("La fecha de hoy es " + dia_actual + " de " + mes_a_texto(mes_actual) + " de " + anio_actual)

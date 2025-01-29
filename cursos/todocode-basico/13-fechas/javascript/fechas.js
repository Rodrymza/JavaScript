let fecha = new Date(); // fecha actual
const hora = fecha.getHours(); // hora actual
const minutos = fecha.getMinutes(); // minutos actual
const segundos = fecha.getSeconds(); // segundos actual

console.log(fecha)

let fecha_local = fecha.toLocaleString()
window.alert("La fecha y hora actual es " + fecha_local)
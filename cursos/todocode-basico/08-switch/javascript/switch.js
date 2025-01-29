// El condicional switch en JavaScript es una estructura de control que permite evaluar una expresión y ejecutar diferentes bloques de código según el valor de la expresión. 
// La sintaxis básica es: switch (expresión) { case valor1: código a ejecutar; break; case valor2: código a ejecutar; break; default: código a ejecutar si no se cumple ninguno de los casos anteriores; }

//Escribe un programa que solicite al usuario un día de la semana y muestre el nombre del día en español. Por ejemplo, si el usuario ingresa "1", el programa debe mostrar "Lunes". Utiliza la estructura de control switch para resolver el ejercicio.

let dia = prompt("Ingresa un numero de dia de la semana para obtener el nombre")

switch (dia) {
    case "1" : console.log("Lunes")
    break;
    case "2" : console.log("Martes")
    break;
    case "3" : console.log("Miercoles")
    break;
    case "4" : console.log("Jueves")
    break;
    case "5" : console.log("Viernes")
    break;
    case "6" : console.log("Sabado")
    break;
    case "7" : console.log("Domingo")
    break;
    default : console.log("Dia invalido")
}


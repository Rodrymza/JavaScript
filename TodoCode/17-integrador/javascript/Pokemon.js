export default class Pokemon {
  constructor(nombre, tipo, hp, ataque, defensa, velocidad) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.hp = hp;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad;
  }

  promedio_habilidades() {
    let suma = this.hp + this.ataque + this.defensa + this.velocidad;
    let promedio = (suma / 4).toFixed(2);
    return promedio;
  }
  mostrar_info() {
    console.log("");
    console.log(this.nombre + " Tipo: " + this.tipo);
    console.log("");
    console.log("HP: " + this.hp);
    console.log("Ataque: " + this.ataque);
    console.log("Defensa: " + this.defensa);
    console.log("Velocidad: " + this.velocidad);
    console.log("Promedio: " + this.promedio_habilidades());

  }

  validar_habilidades() {
    if (this.promedio_habilidades() >= 70) {
      console.log(this.nombre + " esta listo para entrar en la liga");
      
    } else {
      console.log(this.nombre + " no tiene las habilidades suficientes para entrar en la liga");
    }
  }

}

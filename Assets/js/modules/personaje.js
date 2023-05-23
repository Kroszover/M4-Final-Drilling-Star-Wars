export class Personaje {
  constructor(nombre, altura, peso) {
    this.nombre = nombre;
    this.altura = altura;
    this.peso = peso;
  }

  obtenerDatosPJ() {
    console.log(this.nombre);
    console.log("Estatura:", this.altura, "cm");
    console.log("Peso:", this.peso, "kg");
  }
}

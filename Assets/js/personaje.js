export { Personaje };

class Personaje {
  constructor(nombre, altura, peso) {
    this.nombre = nombre;
    this.altura = altura;
    this.peso = peso;
  }

  obtenerDatosPJ() {
    console.log(this.nombre);
    console.log("Estatura: ", this.altura, "Cms");
    console.log("Peso: ", this.peso, "Kgs");
  }
}

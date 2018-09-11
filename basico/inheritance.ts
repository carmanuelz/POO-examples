class Terran {

  private saludo = "hola"

  public saludar() {
    console.log(this.saludo)
  }
}

class Peruano extends Terran {}

const peruano = new Peruano();
peruano.saludar();


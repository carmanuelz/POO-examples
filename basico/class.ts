class Humano {

  private saludo = "hola"

  constructor(ovulo,espermatozoide) {
    this.fecundacion(ovulo,espermatozoide);
  }

  private fecundacion(ovulo,espermatozoide) {
    console.log("Espera hasta aprox 9 meses")
  }

  public saludar() {
    console.log(this.saludo)
  }
}


const humano = new Humano(1,1);
humano.saludar();

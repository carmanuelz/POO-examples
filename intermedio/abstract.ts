

abstract class Soldado {

  constructor(){
    this.servicioMilitar();
  }

  protected abstract servicioMilitar();
}

 class Piloto extends Soldado {

  constructor(){
    super();
    this.cursoAviacion();
  }

  protected servicioMilitar() {
    console.log("3 años en las barracas");
  }

  private cursoAviacion() {
    console.log("suma cumme laude");
  }
}

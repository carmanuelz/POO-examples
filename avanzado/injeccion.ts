

class Mutante implements Xmen {

  private mutacion = "Telequinesis"

  mostrarMutacion() {
    console.log(this.mutacion)
  }

  lucharPorElBien() {
    console.log("Luchar")
  }
}

class MatricularEstudianteMutante {

  private mutante: Mutante;

  constructor(mutante: Mutante) {
    this.mutante.mostrarMutacion();
  }
}

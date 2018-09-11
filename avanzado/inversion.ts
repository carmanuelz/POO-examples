interface Xmen {

  lucharPorElBien();

}

interface EstuduanteMutante {
  mostrarMutacion();

}

class UmanoMutante implements Xmen, EstuduanteMutante {

  lucharPorElBien() {
    throw new Error("Method not implemented.");
  }
  mostrarMutacion() {
    throw new Error("Method not implemented.");
  }

}

class NuevaMatriculaJovenesSuperdotados {

  private estudiante: EstuduanteMutante;

  constructor(estudiante: EstuduanteMutante) {
    this.estudiante.mostrarMutacion();
  }
}

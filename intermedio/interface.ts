interface Vehiculo {

  ascelerar();

  retroceder();

  frenar();

}

class Camioneta implements Vehiculo {

  public ascelerar() {
    throw new Error("Method not implemented.");
  }

  public retroceder() {
    throw new Error("Method not implemented.");
  }

  public frenar() {
    throw new Error("Method not implemented.");
  }

}

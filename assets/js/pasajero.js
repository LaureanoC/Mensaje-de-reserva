class Pasajero {

    nombrePasajero;
    dniPasajero;
    telefonoPasajero;
    

    constructor() {

        this.nombrePasajero = null;
        this.dniPasajero= null;
        this.telefonoPasajero= null;
    }

    asignarNombre(nombre){

        this.nombrePasajero=nombre;

    }

    asignarCelular(celular){

        this.telefonoPasajero=celular;

    }

    asignarDni(dni){

        this.telefonoPasajero=dni;

    }

    devolverNombre(){
        return this.nombrePasajero;
    }

    devolverDni(){
        return this.dniPasajero;
    }

    devolverTelefono(){
        return this.telefonoPasajero;
    }
  
}
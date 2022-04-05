export class Pasajero {

    nombrePasajero;
    dniPasajero;
    telefonoPasajero;
    

    constructor(nombre,dni,telefono) {

        this.nombrePasajero = nombre;
        this.dniPasajero= dni;
        this.telefonoPasajero= telefono;
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
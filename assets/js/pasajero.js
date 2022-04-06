class Pasajero {

    nombrePasajero;
    dniPasajero;
    telefonoPasajero;
    pasajes;
    

    constructor() {

        this.nombrePasajero = null;
        this.dniPasajero= null;
        this.telefonoPasajero= null;
        this.pasajes = [];
    }

    asignarNombre(nombre){

        this.nombrePasajero=nombre;

    }

    asignarCelular(celular){

        this.telefonoPasajero=celular;

    }

    asignarDni(dni){

        this.dniPasajero=dni;

    }

    asignarPasaje(pasaje){
        
        this.pasajes.push(pasaje);
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

   devolverPasajes(){
       return this.pasajes;
   }
    
  
}
class Pasaje {

    direccion;
    anio;
    mes;
    dia;
    hora;
    minutos;
    interseccion;
    nroPasaje;
    
    static id = 0;

    constructor() {

      this.direccion= null;
      this.anio = null;
      this.mes = null;
      this.dia = null;
      this.hora = null;
      this.minutos = null;
      this.interseccion = null;
      this.nroPasaje = null;
      

    }

    asignarDireccion(direccion){
        this.direccion=direccion;
    }

    asignarAnio(a){
        this.anio=a;
    }

    asignarMes(m){
        this.mes = m;
    }

    asignarDia(d){
        this.dia = d;
    }

    asignarHora(h){
        this.hora = h;
    }

    asignarMinutos(m){
        this.minutos = m;
    }

    asignarInt(inter){

        this.interseccion = inter;
    }

    asignarNro(nro){
        this.nroPasaje = nro;
    }

    devolverNro(){
        return this.nroPasaje;
    }

    static asignarId(){
        Pasaje.id = Pasaje.id +1;
    }

    static devolverId(){
        return this.id;
    }

    devolverInt(){
        return this.interseccion
    }

    devolverDireccion(){
        return this.direccion;
    }

    devolverAnio(){
        return this.anio;
    }

    devolverMes(){
        return this.mes;
    }

    devolverDia(){
        return this.dia;
    }

    devolverHora(){
        return this.hora;
    }

    devolverMinutos(){
        return this.minutos;
    }


    

}
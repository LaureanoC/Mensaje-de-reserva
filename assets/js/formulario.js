var cantidadPasajero;
var coleccionPasajeros = [];
var wsp = `https://api.whatsapp.com/send?phone=2478515908&text=`;

cantidadPasajero = 0;



var cantidad = document.querySelector("#agregar");
cantidad.addEventListener("click",function(){

    var pasajero = new Pasajero();
    coleccionPasajeros.push(pasajero);
    crearFormularioTarjeta();

    crearFormularioInputNombre(coleccionPasajeros[cantidadPasajero-1]);
    crearFormularioInputDni(coleccionPasajeros[cantidadPasajero-1]);
    crearFormularioInputCelular(coleccionPasajeros[cantidadPasajero-1]);
    crearFormularioPasaje();

})

 /*  var fechaElegida = fecha.value.toString();
    anio = fechaElegida.slice(0,4);
    mes = fechaElegida.slice(5,7);
    dia = fechaElegida.slice(8,10);
    hora = fechaElegida.slice(11,13);
    minutos = fechaElegida.slice(14,16);
  */



var link = document.querySelector("#link");
link.addEventListener("click",function(){

    console.log(coleccionPasajeros);
    console.log(coleccionPasajeros[0].devolverNombre());
  /*
    var viaje;
    wsp = wsp+viaje;         //%0A Como te puedes fijar en la URL, %0A puede usarse para generar un caracter de salto de linea (0x0A).
    link.setAttribute("href",`${wsp}`);
    */

})


    

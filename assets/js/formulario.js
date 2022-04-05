
var anio,mes,dia,hora,minutos,opcionEscogida,cantidadPasajero;
var wsp = `https://api.whatsapp.com/send?phone=2478515908&text=`;

cantidadPasajero = 0;



var cantidad = document.querySelector("#agregar");
cantidad.addEventListener("click",function(){


    crearFormularioTarjeta();
    crearFormularioInputNombre();
    crearFormularioInputDni();
    crearFormularioInputCelular();
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

    var viaje;
    wsp = wsp+viaje;         //%0A Como te puedes fijar en la URL, %0A puede usarse para generar un caracter de salto de linea (0x0A).
    link.setAttribute("href",`${wsp}`);
    console.log(link);

})


    

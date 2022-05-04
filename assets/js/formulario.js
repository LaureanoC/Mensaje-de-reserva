var cantidadPasajero;
var coleccionPasajeros = [];
cantidadPasajero = 0;



var cantidad = document.querySelector("#agregar");
cantidad.addEventListener("click",function(){

    var pasajero = new Pasajero();
    coleccionPasajeros.push(pasajero);

    crearFormularioTarjeta();
    crearFormularioInputNombre(coleccionPasajeros[cantidadPasajero-1]);
    crearFormularioInputDni(coleccionPasajeros[cantidadPasajero-1]);
    crearFormularioInputCelular(coleccionPasajeros[cantidadPasajero-1]);

    crearFormularioPasaje(coleccionPasajeros[cantidadPasajero-1]);

})

 


var link = document.querySelector("#link");
link.addEventListener("click",function(){

    console.log(coleccionPasajeros);
    console.log(coleccionPasajeros[0].devolverNombre());
    console.log(coleccionPasajeros[0].devolverDni());
    console.log(coleccionPasajeros[0].devolverTelefono());

    var texto = "";
    
    coleccionPasajeros.forEach(function(pasajero){

        var pasajes = pasajero.devolverPasajes();
        console.log(pasajes);
        texto = texto + `%0ADatos del pasajero%0ANombre: ${pasajero.devolverNombre()}%0ADNI: ${pasajero.devolverDni()}%0ATeléfono: ${pasajero.devolverTelefono()}%0A%0A`

        for(i=0; i<pasajes.length; i++){

            texto = texto+`%0APasaje ${i+1}%0AFecha y Hora: ${pasajes[i].devolverDia()}/${pasajes[i].devolverMes()}/${pasajes[i].devolverAnio()} a las ${pasajes[i].devolverHora()}:${pasajes[i].devolverMinutos()}%0ATrayectoria: ${pasajes[i].devolverDireccion()}%0A${pasajes[i].devolverSubeOBaja(pasajes[i].devolverDireccion())}: ${pasajes[i].devolverInt()}%0A%0A`;

        }

                
    })


    //var wsp = `https://api.whatsapp.com/send?phone=3416728288&text=${texto}`;
    var wsp = `https://api.whatsapp.com/send?phone=2478515908&text=${texto}`;
    
        //%0A Como te puedes fijar en la URL, %0A puede usarse para generar un caracter de salto de linea (0x0A).

    link.setAttribute("href",`${wsp}`);
    

})


    

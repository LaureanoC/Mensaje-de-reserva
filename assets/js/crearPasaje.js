function crearGenerarPasaje(pasaje,viaje,pasajero){

    const boton = document.createElement("button");
    boton.textContent="Generar Pasaje";
    boton.className="pasaje__boton"
    boton.id="generarPasaje";

    boton.addEventListener("click",function(evento){

        evento.preventDefault();

        /*console.log(pasaje);
        console.log(viaje);
        console.log(pasajero);*/
        pasajero.asignarPasaje(viaje);
        //console.log(coleccionPasajeros[0].devolverPasaje());

        for (i=1; i<pasaje.childNodes.length; i++){

            pasaje.childNodes[i].remove();
        }

        pasaje.childNodes[1].remove();
        pasaje.childNodes[1].remove();
    
        console.log(pasaje.childNodes)
    
       /* const descripcion = `Nombre: ${pasajero.devolverNombre()}
                             DNI: ${pasajero.devolverDni()}
                             Telefono: ${pasajero.devolverTelefono()}
                             PasajeNro: ${Pasaje.devolverId()}
                             Direccion: ${viaje.devolverDireccion()}
                             Fecha y Hora: ${viaje.devolverDia()}/${viaje.devolverMes()}/${viaje.devolverAnio()} a las ${viaje.devolverHora()}:${viaje.devolverMinutos()}           
                             Interseccion: ${viaje.devolverInt()}`;
*/
        // console.log(descripcion);
        const pasajeNro = `Número de pasaje: ${viaje.devolverNro()}`;
        const nombre = `Nombre: ${pasajero.devolverNombre()}`;
        const dni = `DNI: ${pasajero.devolverDni()}`;
        const telefono = `Teléfono: ${pasajero.devolverTelefono()}`;
        const direccion = `Trayectoria: ${viaje.devolverDireccion()}`;
        const interseccion = `Intersección: ${viaje.devolverInt()}`;
        const fechaHora = `  Fecha y Hora: ${viaje.devolverDia()}/${viaje.devolverMes()}/${viaje.devolverAnio()} a las ${viaje.devolverHora()}:${viaje.devolverMinutos()}`;

        const descripcion = [pasajeNro, nombre, dni, telefono, direccion, interseccion, fechaHora];

        descripcion.forEach(function(d){

            const pgenerado = document.createElement("p");
            pgenerado.className="pasaje__itemlistado";
            pgenerado.textContent = d;
            pasaje.appendChild(pgenerado);

        })
      
        

    })

    pasaje.appendChild(boton);


}

function crearFormularioInputInterseccion(pasaje,viaje){

    const div = document.createElement("div");
    div.className="pasaje__conjuntos";

    const label = document.createElement("label");
    label.setAttribute("for","interseccion");
    label.textContent ="Intersección";
    
    const input = document.createElement("input");
    input.setAttribute("name","interseccion");
    input.setAttribute("id","interseccion");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","Corrientes y Pellegrini");
    input.className="pasaje__input";

    input.addEventListener("keyup",function(){

        console.log(input.value);
        viaje.asignarInt(input.value);
        
    })

    
    
    pasaje.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);


}

function crearFormularioInputSeleccionViaje(pasaje,viaje){

    const p = document.createElement("p");
    p.textContent = "Seleccionar viaje";
    p.className = "tarjeta__seleccionTitulo"
 
    const input1 = document.createElement("input");
    input1.setAttribute("name","viaje");
    input1.setAttribute("id","viaje");
    input1.setAttribute("type","radio");
    
    input1.addEventListener("click",function(){

        viaje.asignarDireccion("Rosario hacia Arrecifes");
        console.log(viaje.devolverDireccion());

    })
 
    const label1 = document.createElement("label");
    label1.setAttribute("for","viaje");
    label1.textContent = "Rosario hacia Arrecifes";
 
    const input2 = document.createElement("input");
    input2.setAttribute("name","viaje");
    input2.setAttribute("id","viaje");
    input2.setAttribute("type","radio");

    input2.addEventListener("click",function(){


        viaje.asignarDireccion("Arrecifes hacia Rosario");
        console.log(viaje.devolverDireccion());

    })
 
    const label2 = document.createElement("label");
    label2.setAttribute("for","viaje");
    label2.textContent ="Arrecifes hacia Rosario";
 
    const div1 = document.createElement("div");
    div1.className="pasaje__conjuntos";
 
    const div2 = document.createElement("div");
    div2.className="pasaje__conjuntos";
 
    
 
    div1.appendChild(input1);
    div1.appendChild(label1);
 
    div2.appendChild(input2);
    div2.appendChild(label2);

    
    pasaje.appendChild(div1);
    pasaje.appendChild(div2);
    
    
 
 }
 
 function crearFormularioInputFecha(pasaje,viaje){
 
     const div = document.createElement("div");
     div.className="pasaje__conjuntoFecha";
 
     const label = document.createElement("label");
     label.setAttribute("for","fecha");
     label.textContent ="Fecha y hora";
     
     const input = document.createElement("input");
     input.setAttribute("name","nombre");
     input.setAttribute("id","nombre");
     input.setAttribute("type","datetime-local");
     input.className="pasaje__input";

     input.addEventListener("blur",function(){


        var fechaElegida = input.value.toString();
        viaje.asignarAnio(fechaElegida.slice(0,4));
        viaje.asignarMes(fechaElegida.slice(5,7));
        viaje.asignarDia(fechaElegida.slice(8,10));
        viaje.asignarHora(fechaElegida.slice(11,13));
        viaje.asignarMinutos(fechaElegida.slice(14,16));
        
        console.log(viaje.devolverAnio());
        console.log(viaje.devolverMes());
        console.log(viaje.devolverDia());
        console.log(viaje.devolverHora());
        console.log(viaje.devolverMinutos());

    })

    div.appendChild(label);
    div.appendChild(input);
    pasaje.appendChild(div);
 }


function crearPasaje(evento,pasajero){

    var viaje = new Pasaje();
    Pasaje.asignarId();
    viaje.asignarNro(Pasaje.devolverId());
    console.log(viaje.devolverNro());

    const pasaje = document.createElement("div");
    pasaje.className="tarjeta__pasaje";

    const div = document.createElement("div");
    div.className="pasaje__conjunto";

    const titulo = document.createElement("p");
    titulo.className = "pasaje__titulo";
    titulo.textContent = `Pasaje numero ${viaje.devolverNro()}`;

    const icono = document.createElement("i");
    icono.className="fa-solid fa-xmark";
    icono.id="botonEliminar";

    div.appendChild(titulo);
    div.appendChild(icono);
    pasaje.appendChild(div);


    evento.target.parentNode.appendChild(pasaje);

    crearFormularioInputSeleccionViaje(pasaje,viaje);
    crearFormularioInputFecha(pasaje,viaje);
    crearFormularioInputInterseccion(pasaje,viaje);
    crearGenerarPasaje(pasaje,viaje,pasajero);
    


}
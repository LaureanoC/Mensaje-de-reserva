function crearFormularioInputSeleccionViaje(pasaje){

    const p = document.createElement("p");
    p.textContent = "Seleccionar viaje";
    p.className = "tarjeta__seleccionTitulo"
 
    const input1 = document.createElement("input");
    input1.setAttribute("name","viaje");
    input1.setAttribute("id","viaje");
    input1.setAttribute("type","radio");
 
    const label1 = document.createElement("label");
    label1.setAttribute("for","viaje");
    label1.textContent = "Rosario hacia Arrecifes";
 
    const input2 = document.createElement("input");
    input2.setAttribute("name","viaje");
    input2.setAttribute("id","viaje");
    input2.setAttribute("type","radio");
 
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
 
 function crearFormularioInputFecha(pasaje){
 
     const div = document.createElement("div");
     div.className="pasaje__conjuntoFecha";
 
     const label = document.createElement("label");
     label.setAttribute("for","fecha");
     label.textContent ="Fecha y hora";
     
     const input = document.createElement("input");
     input.setAttribute("name","nombre");
     input.setAttribute("id","nombre");
     input.setAttribute("type","datetime-local");
     input.className="tarjeta__input";

    div.appendChild(label);
    div.appendChild(input);
    
   
    pasaje.appendChild(div);
    
    
     
 }


function crearPasaje(evento){

    const pasaje = document.createElement("div");
    pasaje.className="tarjeta__pasaje";

    const div = document.createElement("div");
    div.className="pasaje__conjunto";

    const titulo = document.createElement("p");
    titulo.className = "pasaje__titulo";
    titulo.textContent = `Pasaje n`;

    const icono = document.createElement("i");
    icono.className="fa-solid fa-xmark";
    icono.id="botonEliminar";

    div.appendChild(titulo);
    div.appendChild(icono);
    pasaje.appendChild(div);


    evento.target.parentNode.appendChild(pasaje);
    console.log(pasaje);
    
  
    crearFormularioInputSeleccionViaje(pasaje);
    crearFormularioInputFecha(pasaje);
    


}
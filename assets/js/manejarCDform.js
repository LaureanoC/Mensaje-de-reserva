function crearFormularioTarjeta(){

    const tarjeta = document.createElement("div");
    tarjeta.className = "form__tarjeta"
    
    const form = document.querySelector("#form");
    form.appendChild(tarjeta);

    const div = document.createElement("div");
    div.className="tarjeta__pasajero";

    const icono = document.createElement("i");
    icono.className="fa-solid fa-xmark";
    icono.id="botonEliminar";

        cantidadPasajero = cantidadPasajero + 1;
    
    icono.addEventListener("click",function(evento){

        evento.target.parentNode.parentNode.remove();

        console.log(cantidadPasajero);
        if (cantidadPasajero != 0){

            cantidadPasajero = 0;
            var pasajeros = document.querySelectorAll(".tarjeta__pasajeroNumero");
            pasajeros.forEach(function(pasajero){
                cantidadPasajero = cantidadPasajero+1;
                pasajero.textContent = `Pasajero ${cantidadPasajero}`;
            })
        }
        
    
    })
    const p = document.createElement("p");

    p.className = "tarjeta__pasajeroNumero"
    p.textContent=`Pasajero ${cantidadPasajero}`

    tarjeta.appendChild(div);
    div.appendChild(p);
    div.appendChild(icono);
}



function crearFormularioPasaje(pasajero){

    const icono = document.createElement("i");
    icono.className = "fa-solid fa-square-plus";
    icono.id = "agregarPasaje";

    icono.addEventListener("click",function(evento){

        crearPasaje(evento,pasajero);

    })
    const form = document.querySelectorAll(".form__tarjeta");
    let posFinal = form.length-1;
    form[posFinal].appendChild(icono);
}


function crearFormularioInputDni(pasajero){

    const div = document.createElement("div");
    div.className="tarjeta__conjunto";

    const label = document.createElement("label");
    label.setAttribute("for","dni");
    label.textContent ="DNI";
    
    const input = document.createElement("input");
    input.setAttribute("name","dni");
    input.setAttribute("id","dni");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","DNI");
    input.className="tarjeta__input";

    input.addEventListener("keyup",function(){

        pasajero.asignarDni(input.value);
        
    })

    const form = document.querySelectorAll(".form__tarjeta");
    
    let posFinal = form.length-1;
    form[posFinal].appendChild(div);
    div.appendChild(label);
    div.appendChild(input);


}


function crearFormularioInputCelular(pasajero){

    const div = document.createElement("div");
    div.className="tarjeta__conjunto";

    const label = document.createElement("label");
    label.setAttribute("for","celular");
    label.textContent ="Celular";
    
    const input = document.createElement("input");
    input.setAttribute("name","celular");
    input.setAttribute("id","celular");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","2478515908");
    input.className="tarjeta__input";
    input.addEventListener("keyup",function(){

        pasajero.asignarCelular(input.value);
        
    })

    const form = document.querySelectorAll(".form__tarjeta");
    
    let posFinal = form.length-1;
    form[posFinal].appendChild(div);
    div.appendChild(label);
    div.appendChild(input);

}



function crearFormularioInputNombre(pasajero){

    const div = document.createElement("div");
    div.className="tarjeta__conjunto";

    const label = document.createElement("label");
    label.setAttribute("for","name");
    label.textContent ="Nombre y Apellido";
    
    const input = document.createElement("input");
    input.setAttribute("name","nombre");
    input.setAttribute("id","nombre");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","Nombre y Apellido");
    input.className="tarjeta__input";
    
    input.addEventListener("keyup",function(){

        pasajero.asignarNombre(input.value);
        
    })

    const form = document.querySelectorAll(".form__tarjeta");
    
    let posFinal = form.length-1;
    form[posFinal].appendChild(div);
    div.appendChild(label);
    div.appendChild(input);



}

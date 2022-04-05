//var mensaje = `Hola! Quisiera sacar ${cantidad} para el ${dia} tengo que ver la hora de ${viaje}`;


var nombre = document.querySelector("#nombre");
console.log(nombre);

nombre.addEventListener("keyup",function(){

    console.log(nombre.value);
   
})


var dni = document.querySelector("#dni");
dni.addEventListener("keyup",function(){

    console.log(dni.value);
    
})

var celular = document.querySelector("#celular");
celular.addEventListener("keyup",function(){

    console.log(celular.value);
    
})

var fecha = document.querySelector("#fecha");
fecha.addEventListener("blur",function(){

    var año = fecha.value;
    
    console.log(fecha.value);
    
})


    

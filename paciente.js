
var boton= document.getElementById("boton");
var dni;
var nombre;
var fecha;
var especialita;

  function cargar(dni,nombre,fecha,especialista){
             dni=document.getElementById(dni);
 nombre=document.getElementById(nombre);
 fecha=document.getElementById(fecha);
 especialista=document.getElementById(especialista);

         }

    boton.addEventListener("click", function(evento){
                 console.log("Datos: "+dni+nombre+fecha+especialista);
            });


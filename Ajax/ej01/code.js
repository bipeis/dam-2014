(function(){
    "use strict";/*modo estricto, fuerza obliga a utilizar javascript de manera correcta*/

    window.onload = function() {
     /* code here */
     var pagina = document.getElementById("recurso");

    pagina.value=document.URL.toString();


    //////////////////////////////////////////

document.getElementById("enviar").onclick = function(){
    var peticion_http;

  // Obtener la instancia del objeto XMLHttpRequest
  if(window.XMLHttpRequest) {
    peticion_http = new XMLHttpRequest();
  }
  else if(window.ActiveXObject) {
    peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
  }


  // Preparar la funcion de respuesta
  peticion_http.onreadystatechange = muestraContenido;

  // Realizar peticion HTTP
  var url = document.getElementById("recurso").value.toString();
  peticion_http.open('GET', url, true);
  peticion_http.send(null);

  function muestraContenido() {

// Crear nodo de tipo Text
// Crear nodo de tipo Element
var parestados = document.createElement("p");
parestados.id="estadosparrafo";

var stringEstado;
switch(peticion_http.readyState)
{
    case 0:
  stringEstado = "No inicializado";
  break;
case 1:
  stringEstado = "Cargando";
  break;
case 2:
  stringEstado = "Cargado";
  break;
  case 3:
  stringEstado = "Interactivo";
  break;
  case 4:
  stringEstado = "Completo";
  break;
default:
  stringEstado = "Error";
}
var nuevoEstado = document.createTextNode(stringEstado);
parestados.appendChild(nuevoEstado);
document.getElementById("estados").appendChild(parestados);

    if(peticion_http.readyState == 4) {
      if(peticion_http.status == 200) {

        var cuadro = document.getElementById("contenidos");
//ver si ya existe
if (document.getElementById("nuevo")){
   var nuevos = document.getElementById("nuevo");
   nuevos.parentNode.removeChild(nuevos);
}


// Crear nodo de tipo Element
var parrafo = document.createElement("p");
parrafo.id="nuevo";

// Crear nodo de tipo Text
var contenido = document.createTextNode(peticion_http.responseText);

console.log(contenido);


// Añadir el nodo Text como hijo del nodo Element
parrafo.appendChild(contenido);

console.log(parrafo);
// Añadir el nodo Element como hijo de la pagina
document.getElementById("contenidos").appendChild(parrafo);




//cabeceras
// Crear nodo de tipo Element
var parCabeceras = document.createElement("p");
parCabeceras.id="cabecerasPar";

// Crear nodo de tipo Text
var contenCabeceras = document.createTextNode(peticion_http.getAllResponseHeaders().toString());

console.log(contenCabeceras);


// Añadir el nodo Text como hijo del nodo Element
parCabeceras.appendChild(contenCabeceras);

document.getElementById("cabeceras").appendChild(parCabeceras);



//estados
//estados http

var parestadosHTTP = document.createElement("p");
parestadosHTTP.id="estadosparrafohttp";
//estados
var stringEstadoHTTP;
switch(peticion_http.status)
{
    case 200:
  stringEstadoHTTP = "200 Correcta";
  break;
case 404:
  stringEstadoHTTP = "404 No encontrado";
  break;
case 500:
  stringEstadoHTTP = " 500 Error de servidor";
  break;

default:
  stringEstadoHTTP = "Error desconocido";
}
var nuevoEstadoHTTP = document.createTextNode(stringEstadoHTTP);
parestadosHTTP.appendChild(nuevoEstadoHTTP);
document.getElementById("codigo").appendChild(parestadosHTTP);

      }
    }
  }
};
    };

/*window.onload = function() {
  document.getElementById("pinchable").onclick = muestraMensaje;
}
*/
    console.log(document.URL.toString());




})();
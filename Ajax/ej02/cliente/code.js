(function(){
    "use strict";/*modo estricto, fuerza obliga a utilizar javascript de manera correcta*/

    window.onload = function() {

        setInterval(actualizaContenido, 5000);




  function actualizaContenido() {
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


  peticion_http.open('GET', '../servidor/generaContenidos.php', true);
  peticion_http.send(null);

  function muestraContenido(){
    console.log(peticion_http);

    var noticia = document.createElement("p");

    var textoNoticia = document.createTextNode(peticion_http.responseText);

console.log(contenCabeceras);


// Añadir el nodo Text como hijo del nodo Element
parCabeceras.appendChild(contenCabeceras);

  }

    }
    };
})();
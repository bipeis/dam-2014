$(function(){

    $("#comprobar").on("click", function(){
        console.log("prueba");

        var mostrarDisponibilidad = function(){


        };

        $.ajax({
                url : 'compruebaDisponibilidadJSON.php',
                cache : false,
                contentType: "application/json",
                success : function(data, status,jqXHR){
                    console.log(jqXHR);
                    var respuesta = JSON.parse(jqXHR.responseText);
                    console.log(respuesta);
                    var parrafo = document.createElement("p");

                    if(respuesta.disponible==="si"){
                          var contenido = document.createTextNode(respuesta.disponible);
                        parrafo.appendChild(contenido);

                    }
                    else{
                        var contenid = document.createTextNode(respuesta.disponible + respuesta.alternativas);
                    parrafo.appendChild(contenid);
                }
                    document.getElementById("disponibilidad").appendChild(parrafo);},







                error : function(jqXHR, status, error) {
                    console.log(error);
                }
});



    });

});
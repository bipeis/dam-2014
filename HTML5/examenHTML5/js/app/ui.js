var APP = APP||{};
APP.UI = (function(lng, undefined) {
    "use strict";

    var createElement = function(descripcion){
          var $li = $('<li/>');

            $li.append(descripcion);

            return $li;

    };

    var showMap = function(lat,long) {
        var mapcanvas = document.createElement('div');
        mapcanvas.id = 'mapcanvas';
        mapcanvas.style.height = '400px';
        mapcanvas.style.width = '560px';

        document.querySelector('#show').appendChild(mapcanvas);

        var latlng = new google.maps.LatLng(lat, long);
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeControl: false,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "¡Usted está aquí!"
        });
    };

    var mostrarShow = function(show){

        console.log("show en ui");
        console.log(show);

        borrarPantalla();

         //Listado datos show
         var stringListado = "<ul id='listado' class='list-group'>";

         stringListado+= "<li id='listadoShow' class='list-group-item'>Identificador: " +
          show.id + "     Date: " + show.date +  "     Hour: " + show.hour +
          " <button id='jugarboton' type='submit' class='btn btn-default'>Jugar</button>" + "</li>";

         stringListado+="</ul>";
        var divShow = $(stringListado);
        divShow.insertAfter($("#show"));
    };

    var mostrarReto = function(reto){

        console.log("show en ui");
        console.log(reto);

        borrarPantalla();

         //Listado datos show
         var stringListado = "<ul id='listadoRe' class='list-group'>";

         stringListado+= "<li id='listadoReto' class='list-group-item'>age: " +
          reto.player.age + "     Player name: " + reto.player.name +  "     Hour: " + show.hour +
          "<img src='"+reto.player.photo + "'> " +
          " <button id='challengeboton' type='submit' class='btn btn-default'>Jugar</button>" + "</li>";

         stringListado+="</ul>";
        var divShow = $(stringListado);
        divShow.insertAfter($("#show"));

    };

    var mostrarChallenge = function(challenge){

        console.log("show en ui challenge");
        console.log(challenge);

        borrarPantalla();

         //Listado datos show
         var stringListado = "<ul id='listadoCha' class='list-group'>";

         stringListado+= "<li id='listadoChallenge class='list-group-item'>Opcion1 descripcion: " +
          challenge.option1.description +
                    "<img src='"+challenge.option1.photo + "'> " +
          " <button id='challengeboton' type='submit' class='btn btn-default'>Jugar</button>" +
          " <button id='mapretoboton' type='submit' class='btn btn-default'>Ubicacion Reto</button>" +
          " <button id='mapmioboton' type='submit' class='btn btn-default'>Ubicacion Mia</button>" +
          " <button id='encuestaBoton' type='submit' class='btn btn-default'>Encuesta</button>" +"</li>";

         stringListado+="</ul>";
        var divShow = $(stringListado);
        divShow.insertAfter($("#show"));

        //mapa
        console.log("mapa");
        console.log(challenge.place);

        showMap(challenge.place.latitude,challenge.place.longitude);


    };

    var showEncuesta = function(){

        console.log("show en ui encuesta");

        borrarPantalla();

       //Formulario de encuesta
        var formBuscarTractora = $("<div id='formEncuestaDiv'>"+


          "<form id='formEncuesta' class='navbar-form navbar-left' " +
            "role='search'>  <div class='form-group'>" +
            "<label class='label label-default' for='idTracampo1ctora'>Pregunta1:</label>" +
            "<input id='campo1' type='text' class='form-control'> " +
              "<label class='label label-default' for='idTracampo1ctora'>Pregunta2:</label>" +
            "<input id='campo1' type='email' class='form-control'> <br>" +
                        "<label class='label label-default' for='idTracampo1ctora'>Pregunta3:</label>" +
            "<input id='campo1' type='url' class='form-control'> <br> " +
                        "<label class='label label-default' for='idTracampo1ctora'>Pregunta4:</label>" +
            "<input id='campo1' type='text' class='form-control' > <br>" +
                        "<label class='label label-default' for='idTracampo1ctora'>Pregunta4:</label>" +
            "<input id='campo1' type='text' class='form-control' > <br> " +
                        "<label class='label label-default' for='idTracampo1ctora'>Pregunta5:</label>" +
            "<input id='campo1' type='text' class='form-control' > <br> " +
           " </div>" + " <input id='submit' type='submit' value='Enviar'></form>" +


           "</div>");



        formBuscarTractora.insertAfter("#show");


    };

var showMapReto = function(mensaje){
mostrarChallenge();
};

var showMapMio = function(mensaje){

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
        function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');

  showMap(crd.latitude,crd.longitude);
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

        navigator.geolocation.getCurrentPosition(success, error, options);
};


    var eliminarMapa = function(){
        /*$('#map').gmap3();
        setTimeout(function(){
            $('#map').gmap3('destroy').remove();
            $('.googlemap').remove();
        }, 100);
*/
    };


    var borrarPantalla = function(){
        //var $ul = $('#listaDatos');
        //$ul.empty();
        var $divListado = $('#listado');
        $divListado.remove();
        var $divBusqueda = $('#listadoShow');
        $divBusqueda.remove();
        var $divChallenge = $('#listadoCha');
        $divChallenge.remove();
        var $divReto = $('#listadoRe');
        $divReto.remove();
        var $divEncuesta = $('#formEncuestaDiv');
        $divEncuesta.remove();
        var $divMapa = $('#mapcanvas');
        $divMapa.remove();

        //if(mapa===0){eliminarMapa();}

    };

    var mostrarActivo = function(li){
        var $li = $(li);
        $li.addClass('active').siblings('.active').removeClass('active');
    };

    return {
        mostrarShow : mostrarShow,
        mostrarReto : mostrarReto,
        mostrarChallenge : mostrarChallenge,
        showMap : showMap,
        showMapReto : showMapReto,
        showMapMio : showMapMio,
        mostrarActivo : mostrarActivo,
        showEncuesta : showEncuesta
    };

})();
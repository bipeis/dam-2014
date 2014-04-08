var APP = APP||{};
APP.Controller = (function() {
    "use strict";


    var getShow = function(e){
        APP.Pedir.getInfo(function(show, textStatus, jqXHR){
            console.log("controller.getShow");
            console.log(show);
            APP.bbdd.guardarDatos(show);
        }, 'data/show.json');
    };

    var showMapa = function(e){
        APP.UI.mostrarActivo(this);
        APP.Pedir.getInfo(function(conductor, textStatus, jqXHR){
            APP.UI.mostrarConductor(conductor);
        }, 'data/conductor.json');
    };

    var showReto = function(e){
        APP.UI.mostrarActivo(this);

        APP.bbdd.getSiguienteReto(show);
    };

    var showChallengue = function(e){
        APP.UI.mostrarActivo(this);

        APP.bbdd.getSiguienteChallengue();
    };

    var showMapaReto = function(e){
        APP.UI.mostrarActivo(this);

        APP.UI.showMapReto("Ubicacion del reto");
    };
    var showMapaMio = function(e){
        APP.UI.mostrarActivo(this);

        APP.UI.showMapMio("Mi ubicacion");
    };


    return {
        showMapa : showMapa,
        showReto : showReto,
        showChallengue : showChallengue,
        showMapaReto : showMapaReto,
        showMapaMio : showMapaMio,
        getShow : getShow

    };
})();
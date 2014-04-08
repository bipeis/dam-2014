    $(function(){
        "use strict";

        $(document).on('click', '#jugarboton', APP.Controller.showReto);
        $(document).on('click', '#challengeboton', APP.Controller.showChallengue);
        $(document).on('click', '#mapretoboton', APP.Controller.showMapaReto);
        $(document).on('click', '#mapmioboton', APP.Controller.showMapaMio);
        $(document).on('click', '#encuestaBoton', APP.UI.showEncuesta);

    });
        window.$ = function(selector){
            var elems = document.querySelectorAll(selector);

            return (elems.length === 1) ? elems[0] : elems;
        };



/*funcion anonima*/
var anade = (function(){
   "use strict";/*modo estricto, fuerza obliga a utilizar javascript de manera correcta*/
            //para hacer una variable global para no tener que escribir todo el tiempo lo de queryselector


         var lista = $('#lista');
        var count = lista.children.length;

    var anade = function()
    {


        var linea = document.createElement("li");


        linea.innerText = "Elemento " + (++count);


        lista.appendChild(linea);


    };

    return anade;

})();
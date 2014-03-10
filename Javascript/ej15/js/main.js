var countClicks=0;

/*funcion anonima*/
var muestra = (function(){
    "use strict";/*modo estricto, fuerza obliga a utilizar javascript de manera correcta*/

    var muestra = function()
    {
        //para hacer una variable global para no tener que escribir todo el tiempo lo de queryselector
        window.$ = function(selector){
            var elems = document.querySelectorAll(selector);

            return (elems.length === 1) ? elems[0] : elems;
        };

        countClicks++;

        var enlaces = document.querySelectorAll('.enlace');

        if(countClicks<=1){
            if(enlaces.length > 0)
                {
                    enlaces[0].classList.add('oculto');
                }
            var spans = document.querySelectorAll('span');

            if(spans.length >0)
                {
                    var nodo = spans[spans.length-1];
                    nodo.classList.remove("oculto");
                    nodo.className="visible";
                }
            }
    };

    return muestra;

})();
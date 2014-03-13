        window.$ = function(selector){
            var elems = document.querySelectorAll(selector);

            return (elems.length === 1) ? elems[0] : elems;
        };

/*funcion anonima*/
var anade = (function(){
   "use strict";/*modo estricto, fuerza obliga a utilizar javascript de manera correcta*/
            //para hacer una variable global para no tener que escribir todo el tiempo lo de queryselector


         var lista = $('#lista');
         var lis = lista.children;//pra listeners ejemplo
        var count = lista.children.length;

        var mostrarTexto = function(e){
            console.log(lis);
            console.log(e);
        };

        lista=addEventListener('click',mostrarTexto);
        //for (var i = lis.length - 1; i >= 0; i--) {
        //    lis[i].addEventListener('click',mostrarTexto());
        //}


    var anade = function()
    {


        var linea = document.createElement("li");


        linea.innerText = "Elemento " + (++count);


        lista.appendChild(linea);


    };

    return anade;

})();
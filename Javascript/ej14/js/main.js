(function(){
    "use strict";/*modo estricto, fuerza obliga a utilizar javascript de manera correcta*/

    //Numero de enlaces de la pagina
    var enlaces = document.getElementsByTagName('a');
    console.log(enlaces.length);

    enlaces = document.querySelectorAll('a');

   console.log(enlaces.length);
    console.log(enlaces);

    //Direccion a la que enlaza el ultimo enlace
    var enlace = enlaces[enlaces.length-2];
    console.log(enlace.href);

    //enlace = document.querySelectorAll('a:last-child-of-type');
    //console.log(enlace);

    //Numero de enlaces que enlazan a http://prueba
    var count =0;
    for (var i = enlaces.length - 1; i >= 0; i--) {
        if (enlaces[i].href==="http://prueba/")
            count++;
    }
    console.log(count);

    enlaces = document.querySelectorAll('a[hrefs="http://prueba"]');
    console.log(enlaces);

    //NUmero de enlaces del tercer parrafo
    //parrafos que son hijos directos de body
    var parrafos = document.querySelectorAll('body > p');
    if(parrafos.length >= 3){
        enlaces=parrafos[2].querySelectorAll('a');
        console.log(enlaces.length);
    }

    enlaces = document.querySelectorAll('body > p:nth-child-of-type(2) a');
    console.log(enlaces);


})();
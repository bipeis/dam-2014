var APP = APP || {};

/*funcion anonima*/
APP.comprobarMayusculasYOMinusculas = (function(){
    "use strict";/*modo estricto, fuerza obliga a utilizar javascript de manera correcta*/

var comprobarMayusculas = function(palabra)
{
    if (palabra && (palabra==palabra.toUpperCase())) return "Son todo mayúsculas";


    return false;
}

var comprobarMinusculas = function(palabra)
{
    if (palabra && (palabra==palabra.toLowerCase())) return "Son todo minúsculas";

    return false;
}

var comprobarMayusculasMinusculas = function(palabra)
{

    return comprobarMayusculas(palabra)|| comprobarMinusculas(palabra)|| "Mezcla de mayusculas y minusculas";

}
return comprobarMayusculasMinusculas;
})();

console.log(APP.comprobarMayusculasYOMinusculas('MAYUSCULAS'));
console.log(APP.comprobarMayusculasYOMinusculas('minusculas'));
console.log(APP.comprobarMayusculasYOMinusculas('MeZClA'));
console.log(APP.comprobarMayusculasYOMinusculas('UPS'));
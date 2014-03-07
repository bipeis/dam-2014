var APP = APP || {};

/*funcion anonima*/
APP.palindromo = (function(){
    "use strict";/*modo estricto, fuerza obliga a utilizar javascript de manera correcta*/

var palindromo = function(str)
{
    str = str.trim().replace(/ /gi, "").toLowerCase();
    var pal = str.trim().split("").reverse().join("");

    return pal===str;
};


return palindromo;
})();

console.log(APP.palindromo("radar"));
console.log(APP.palindromo("RADAR"));
console.log(APP.palindromo("La ruta nos aporto otro paso natural"));
console.log(APP.palindromo("Arkaitz"));
/*funcion anonima*/
(function(){
    "use strict";/*modo estricto, fuerza obliga a utilizar javascript de manera correcta*/

var meses = ["Enero", "Febrero"];

meses.push("Marzo");
meses.push("abril");
meses.push("mayo");
meses.push("junio");
meses.push("julio");
meses.push("agosto");
meses.push("septiembre");
meses.push("octubre");
meses.push("noviembre");
meses.push("diciembre");

console.log(meses);

for (var i = meses.length - 1; i >= 0; i--) {
    console.log(meses[i]);
};

})();
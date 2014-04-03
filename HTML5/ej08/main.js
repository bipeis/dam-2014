$(function(){
    "use strict";

var contenido = sessionStorage.getItem('contenido');
var contenidolocal = localStorage.getItem('contenido');

document.getElementById("cajatexto").value = contenido;
document.getElementById("cajatextoLocal").value = contenidolocal;

function handleStorage(event) {
event = event || window.event; // support IE8
if (event.newValue !== document.getElementById("cajatextoLocal").value) { // it was removed
// Do somsessionStorage.setItem('contenido', document.getElementById("cajatexto").value);
document.getElementById("cajatextoLocal").value=contenidolocal;
} else {
// Do somthing else
}
}
window.addEventListener('storage', handleStorage, false);
//window.attachEvent('onstorage', handleStorage);


var guardar = function(){

console.log("guardar");

sessionStorage.setItem('contenido', document.getElementById("cajatexto").value);
localStorage.setItem('contenido', document.getElementById("cajatextoLocal").value);

console.log(sessionStorage.getItem('contenido'));
console.log(localStorage.getItem('contenido'));

};

// add event listener to t
var el = document.getElementById("cajatexto");
el.addEventListener("keyup", guardar, false);
// add event listener to t
var el2 = document.getElementById("cajatextoLocal");
el2.addEventListener("keyup", guardar, false);


});
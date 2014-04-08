var APP = APP||{};
APP.bbdd = (function(){
    "use strict";


window.indexedDB = window.indexedDB || window.mozIndexedDB ||
                window.webkitIndexedDB || window.msIndexedDB;

window.IDBTransaction = window.IDBTransaction ||
                window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange ||
                window.webkitIDBKeyRange || window.msIDBKeyRange;

var db = null;

function onerror(e) {
    console.log(e);
}

function open () {
    var version = 5;
    var request = indexedDB.open("show", version);

    request.onupgradeneeded = function(e) {
        db = e.target.result;
        console.log("UPGRADE");
        if(db.objectStoreNames.contains('show')) db.deleteObjectStore('show');

        var store = db.createObjectStore("show",
                    { keyPath: "id" });
    };

    request.onerror = function (e){
        console.log(e);
    };

    request.onsuccess = function(e) {
        console.log("DB opened");

        db = e.target.result;
            //recoger datos del reto
    APP.Controller.getShow();
    };
}

function addShow (show) {
    console.log(db);
    var transaction = db.transaction(["show"], "readwrite");
    var store = transaction.objectStore("show");

    var data = {
        "id": show.id,
        "date" : new Date(show.date),
        "hour" : show.hour,
        "players" : show.players,
        "timeStamp": new Date().getTime(),
        "contadorRetos" : 1,
        "contadorChallengues" : 1
    };

    var request = store.put(data);

    request.onsuccess = function(e) {
        console.log("Sucessful add: "+e);
        console.log(e);
    };

    request.onerror = function(e) {
        console.log("Error adding: ", e);
    };
}

function removeTask (identificador){
    var transaction = db.transaction(["show"], "read");
    var store = transaction.objectStore("show");
    var request = store.get(identificador);

    return request;
}

function getContadorRetos(){
    var transaction = db.transaction(["show"]);
    var store = transaction.objectStore("show");

    var cursorRequest = store.openCursor();

    cursorRequest.onsuccess = function(e) {
        var result = e.target.result;
        if(!!result === false) return;

        console.log(result);
        return result.value.contador;
    };

    cursorRequest.onerror = onerror;
}

function getContadorChallengues(){
    var transaction = db.transaction(["show"]);
    var store = transaction.objectStore("show");

    var cursorRequest = store.openCursor();

    cursorRequest.onsuccess = function(e) {
        var result = e.target.result;
        if(!!result === false) return;

        console.log(result);
        return result.value.contador;
    };

    cursorRequest.onerror = onerror;
}

function getReto(contador)
{
        var transaction = db.transaction(["show"]);
    var store = transaction.objectStore("show");

    var cursorRequest = store.openCursor();

    cursorRequest.onsuccess = function(e) {
        var result = e.target.result;
        if(!!result === false) return;

        console.log("getReto.contador");
        console.log(result.value.contadorRetos);

        APP.UI.mostrarReto(result.value.players[result.value.contadorRetos]);

        return result.value.players[contador];
    };

    cursorRequest.onerror = onerror;
}

function getChallengue(contador)
{
        var transaction = db.transaction(["show"]);
    var store = transaction.objectStore("show");

    var cursorRequest = store.openCursor();

    cursorRequest.onsuccess = function(e) {
        var result = e.target.result;
        if(result === false) return;


        var contadorChallen = result.value.contadorChallengues;
        var contadorReto= result.value.contadorRetos;

        console.log("getReto.contadorChallengues");
        console.log(result.value);
        console.log(result.value.contadorChallengues);
        console.log(result.value.players[contadorReto].challenges[contadorChallen]);
        console.log(result.value.players[contadorReto][contadorChallen]);

        APP.UI.mostrarChallenge(result.value.players[contadorReto].challenges[contadorChallen]);

        //return result.value.players[contador];
    };

    cursorRequest.onerror = onerror;
}

function getSiguienteReto() {

    var contador = getContadorRetos();
    console.log("contador");
    console.log(contador);
    var reto = getReto(contador);
}

function getSiguienteChallengue() {

    var contador = getContadorChallengues();
    console.log("contadorChallengues");
    console.log(contador);
    var reto = getChallengue(contador);
}

function getAllTodoItems() {
    //var todos = document.getElementById("show");
    //todos.innerHTML = "";

    var transaction = db.transaction(["show"]);
    var store = transaction.objectStore("show");

    var cursorRequest = store.openCursor();

    cursorRequest.onsuccess = function(e) {
        var result = e.target.result;
        if(!!result === false) return;

        console.log("bbdd.getAllTodoItems");
        console.log(result.value);
        APP.UI.mostrarShow(result.value);
        //result.continue();
    };

    cursorRequest.onerror = onerror;
}

function addTodo() {
    var todo = document.getElementById("todo");
    add(todo.value);
    todo.value = "";
}

function init() {

    open();
}





var guardarDatos = function(show){
        //almacenar en indexdbb
        console.log(show.id);
        addShow(show);

        getAllTodoItems();

    };


open();


    return{
        guardarDatos : guardarDatos,
        getSiguienteReto : getSiguienteReto,
        getSiguienteChallengue : getSiguienteChallengue,
        addShow : addShow,
        getReto : getReto
    };

})();
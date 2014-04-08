/*Crear un objeto que encapsule a una base de datos para añadir, modificar, eliminar y obtener registros.
 Dicha base de datos va a almacenar una sencilla lista de tareas pendientes.

  Los requisitos son:
Disponer de un almacén de tareas pendientes. Sus propiedades son: un
identificador único que actúa como índice, el texto descriptivo, una propiedad que
nos indique si la tarea está completada o no y la fecha/hora de creación

Crear un método addTask que dado un objeto que corresponde con una tarea, lo
almacene en la base de datos

Crear un método removeTask que dado un identificador de una tarea, lo elimine de
la base de datos. Éste método debe devolver la eliminada.

Crear un método updateTask que dado un identificador de una tarea, actualice los
datos correspondientes a la tarea en la base de datos
*/


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
    var version = 4;
    var request = indexedDB.open("todo-list", version);

    request.onupgradeneeded = function(e) {
        db = e.target.result;

        var store = db.createObjectStore("todo-list",
                    { keyPath: "timeStamp" });
    };

    request.onerror = function (e){
        console.log(e);
    };

    request.onsuccess = function(e) {
        console.log("DB opened");

        db = e.target.result;
    };
}

function add (todoText) {
    var transaction = db.transaction(["todo-list"], "readwrite");
    var store = transaction.objectStore("todo-list");

    var data = {
        "text": todoText,
        "timeStamp": new Date().getTime()
    };

    var request = store.add(data);

    request.onsuccess = function(e) {
        console.log("Sucessful add: "+e);
    };

    request.onerror = function(e) {
        console.log("Error adding: ", e);
    };
}

function removeTask (identificador){
    var transaction = db.transaction(["todo-list"], "read");
    var store = transaction.objectStore("todo-list");
    var request = store.get(identificador);

    return request;
}


function updateTask (todoText,data) {
    var transaction = db.transaction(["todo-list"], "readwrite");
    var store = transaction.objectStore("todo-list");

    var request = store.put(data);

    request.onsuccess = function(e) {
        console.log("Sucessful add: "+e);
    };

    request.onerror = function(e) {
        console.log("Error adding: ", e);
    };
}


function getAllTodoItems() {
    var todos = document.getElementById("todoItems");
    todos.innerHTML = "";

    var transaction = db.transaction(["todo-list"]);
    var store = transaction.objectStore("todo-list");

    var cursorRequest = store.openCursor();

    cursorRequest.onsuccess = function(e) {
        var result = e.target.result;
        if(!!result === false) return;

        console.log(result.value);
        result.continue();
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

window.addEventListener("DOMContentLoaded", init, false);

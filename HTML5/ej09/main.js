$(function(){
    "use strict";

/*Crear un objeto que encapsule una base de datos WebSQL, que nos permita
acceder a una base de datos para añadir, modificar, eliminar y obtener
registros. Dicha base de datos va a almacenar tweets procedentes de Twitter,
que tienen asociado el hashtag #html5. Los requisitos son los siguientes:
✔
✔
✔
Disponer de una tabla para almacenar los tweets. Los campos mínimos

son: identificador del tweet, texto, usuario, y fecha de publicación


La utilización del API se resume en tres simples métodos:
✔
openDatabase: abrir (o crear y abrir) una base de datos en el navegador
del cliente
✔ transaction: iniciar una transacción
✔ executeSql: ejecutar una sentencia SQL


*/

var insertInTable = function(id,texto, usuario,fecha){
    console.log("paso insertInTable");
    console.log(id);
    console.log(texto);
    console.log(usuario);
    console.log(fecha);
    db.transaction(function (tx) {
        tx.executeSql("INSERT INTO tweets (id, texto, usuario, fecha) VALUES (?,?,?,?)",[id,texto, usuario,fecha]);
    }, function (err) {
            console.log("insertTable" + err.message);
    });
    console.log("paso insertInTable fin");

};

var getTweets = function(){
    console.log("getTweets");
            $.ajax({
                url : 'tweets.json',
                cache : false,
                contentType: "json",
                success : function(data, status,jqXHR){
                    insertInTable(data[0].id,data[0].texto,data[0].usuario,data[0].fecha);
                    console.log("getTweets data");
                    console.log(data);

                    getTable();

                },
                error : function(jqXHR, status, error) {
                    console.log("getTweets" + error);
                }
            });

};


var getTable = function(){

    console.log("getTable");
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM tweets',
        [],
        function callback(tx, results) {
            var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
            console.log("getTable  " + results.rows.item(i).id + results.rows.item(i).texto + results.rows.item(i).usuario + results.rows.item(i).fecha);
            }
        },
        function errorCallback(tx, error) {
        console.log("geTable" + error.message);
        }
        );
});
};




var db = openDatabase('mydb', '1.0', 'My first database', 2 * 1024 * 1024);

db.transaction(function (tx) {
tx.executeSql('DROP TABLE tweets');
tx.executeSql('CREATE TABLE IF NOT EXISTS tweets (id, texto, usuario, fecha)');
tx.executeSql('INSERT INTO tweets (id, texto, usuario, fecha) VALUES ("1", "prueba","user","fecha")');
}, function (err) {
console.log(err.message);
});

console.log("paso antes getTweets");

getTweets();

});
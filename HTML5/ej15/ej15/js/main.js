$(function () {
    "use strict";

    // Obtener los elementos del DOM

    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;


    // Comprobar la disponibilidad de Web Socket en el navegador
    if (Modernizr.websockets) {
        console.log("websocket soportado");
    }
        else
        {
            console.log("websocket no soportado");
                    return false;
    }

    window.WebSocket = window.WebSocket || window.MozWebSocket;

    // Abrir la conexion con ws://www.arkaitzgarro.com:1337
    var socket = new WebSocket("ws://www.arkaitzgarro.com:1337");

socket.onopen  = function(e){
 console.log("Welcome - status "+this.readyState);
 document.getElementById("status").value="Connected";
  };


socket.onclose = function(e){
 console.log("Disconnected - status "+this.readyState);
  };
document.getElementById("enviar").onclick = function(e){
     socket.send("pepe"); };

    // 1. Al abrir la conexión, solicitar el nick.
    // Send nick

    // 2. Controlar posibles errores del servidor.
    // 3. Escuchar los mensajes del servidor, y mostrarlos en el elemento "content"
    socket.onmessage = function(evt) {

        console.log("evento");
        console.log(evt);
        var obj = jQuery.parseJSON( evt.data);
        console.log(obj);
        if(obj.type =="color")
        {
            console.log("color");
            myColor = obj.color;
        }
        if(obj.type =="history")
        {
            console.log("history");

            for (var i = obj.data.length - 1; i >= 0; i--) {
            console.log(obj.data.author);
            console.log(obj.data.text);
            console.log(obj.data.color);
            console.log(obj.data.time);
            addMessage(obj.data.author,obj.data.text,obj.data.color,obj.data.time);

            }

        }


        if(obj.type =="message")
        {
            console.log(obj.data.author);
            console.log(obj.data.text);
            console.log(obj.data.color);
            console.log(obj.data.time);
            addMessage(obj.data.author,obj.data.text,obj.data.color,obj.data.time);
        }
      };
    // 4. La estructura del objeto enviado por el servidor es la siguiente:
    //      {
    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.
    //socket.send("mensaje de pepe");



    /**
     * Añadir el mensaje a la ventana de chat
     */
    function addMessage(author, message, color, dt) {
        content.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
              (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':' +
              (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes()) +
              ': ' + message + '</p>');
    }
});
$(function(){
    "use strict";

var play = function(){
    var v = document.getElementsByTagName("video")[0];
    v.play();
};

var pause = function(){
    var v = document.getElementsByTagName("video")[0];
    v.pause();
};

var stop = function(){
    var v = document.getElementsByTagName("video")[0];
    v.stop();
};

var volumeUp = function(){
    var v = document.getElementsByTagName("video")[0];
    //Dame el volumen actual (1)
var volume = v.volume;
volume = volume + 0.1;

//Cambia el volumen para la mitad
v.volume = volume;
console.log(volume);

};

var volumeDown = function(){
    var v = document.getElementsByTagName("video")[0];

    var volume = v.volume;
    v.volume = volume - 0.1;
    console.log(volume);

};

var fullScreen = function(){
    var v = document.getElementById("videoo");
    v.webkitRequestFullscreen();
};

    function restart() {
         pause();
        var video = document.getElementById("videoo");
        video.currentTime = 0;

        document.getElementById("progress").value=0;
    }

    function inicio() {

        var video = document.getElementById("videoo");
        video.currentTime = 0;

        document.getElementById("progress").value=0;
    }

    function fin() {
         pause();
        var video = document.getElementById("videoo");
        video.currentTime = video.duration;

        document.getElementById("progress").value=100;
    }

    function avanzar() {

        var video = document.getElementById("videoo");
        video.currentTime += 10;

    }

    function retroceder() {

        var video = document.getElementById("videoo");
        video.currentTime-=10;

    }

    var cargar = function() {
document.getElementById("videoo").src="Los Simpsons.mp4";

document.getElementById("videoo").load();

    };


var onProgress = function (e){

    var vid = document.getElementById('videoo');
    var percent = null;
    document.getElementById("progress").value=0;

    if (vid.buffered.length > 0 && vid.buffered.end && vid.duration) {
        percent = vid.buffered.end(0) / vid.duration;
    }
     else if (vid.bytesTotal !== undefined && vid.bytesTotal > 0 && vid.bufferedBytes !== undefined) {
        percent = vid.bufferedBytes / vid.bytesTotal;
    }

    if (percent !== null) {
        percent = 100 * Math.min(1, Math.max(0, percent));

        console.log(percent);
        document.getElementById("progress").value=percent;
    }

};


console.log(document.getElementsByTagName("video")[0]);

$(document).on('click', '#play', play);
$(document).on('click', '#stop', restart);
$(document).on('click', '#pause', pause);
$(document).on('click', '#volumeUp', volumeUp);
$(document).on('click', '#volumeDown', volumeDown);
$(document).on('click', '#fullscreen', fullScreen);
$(document).on('click', '#inicio', inicio);
$(document).on('click', '#fin', fin);
$(document).on('click', '#avanzar', avanzar);
$(document).on('click', '#retroceder', retroceder);
$(document).on('click', '#simpsons', cargar);

  document.getElementById("videoo").addEventListener('timeupdate', onProgress, false);

});
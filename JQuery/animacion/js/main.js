$(function(){
    'use strict';

    var $boxes = $('.box');

/*
        $boxes.animate(
      {
          'height' : '50px',
          'width' : '50px',
          'color' : 'yellow',
          'background-color' : 'red',
          'font-size' : '18px',
          'left' : '100%'
            }, 800, function(){
                console.log("Fin de animacion");
            },1000
    );
*/

            /*$boxes.first().animate({
                'left' : '100%'
            },1000);
*/

    var $width = $(document).width();

    $boxes.css({
        'height' : '50px',
          'width' : '50px',
          'color' : 'yellow',
          'background-color' : 'blue',
          'font-size' : '18px',
          '-webkit-transform' : 'translateX(' + ($width - 100) +'px)',
          '-webkit-transition-duration' : '1s'

    }, 50000);


});
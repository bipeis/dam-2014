(function($){
    'use strict';

    $.fn.stripe = function(color){
        var c = color|| '#ccc'; // valor por defecto por si es undefined lo q se pasa

        return this.filter('table').each(function(){
            var $this = $(this);

            $this.find('tbody tr:odd').css('background-color', c);

        });
    };

})(jQuery);

$('table, div').stripe('#f0f');
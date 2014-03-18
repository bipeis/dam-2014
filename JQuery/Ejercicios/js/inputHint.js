$(function(){
    'use strict';

    var $input = $('input[name=q]');
    var $label = $('label[for=q]');
    $hint = $label.text();

    $input.val($label.text()).addClass('hint');
    $label.hide();

    $input.on('focus',function(e){
        var $this = $this;

        if($input.val()===$hint){
            $input.val('');
            $input.removeClass('hint');
        }
    });

    $input.on('blur', funtion(e){
        if($input.val().trim().length === 0){
            $input.val($hint);
            $input.addClass('hint');
        }
    });
});
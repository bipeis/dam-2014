$(function(){
    'use strict';

    var $divs = $('div.module');
    console.log($divs);

    var $li = $('#myList li').eq(2);
    console.log($li[0]);

    $li = $('#myList').find('li').eq(2);
        console.log($li[0]);

    $li = $('#myList li:nth-child(3)');

        console.log($li[0]);
        $li=$('#myListItem');
 console.log($li[0]);

//label del input
 var $input = $('input.input_text');
 var $label = $input.closest('form')
        .find('label[for="' + $input.attr('name') + '"]"');
        console.log($label);

//Averiguar cuantos elementos en la pag estan ocultos
var $ocultos= $(':hidden');
console.log($ocultos);

// Averiguar cuantas imagenes en la pagina poseen el atributo alt
var $img = $('img[alt]');
console.log($img);

// Seleccionar todas las filas impares del cuerpo
var $filas = $('tbody tr:odd').css('background-color', 'gray');
console.log($filas);


//DOM
//imagenes alt
$('img').each(function(idx, el) {
    console.log(
        'La imagen ' + idx +
        'contiene el alt: ' +
        $(el).attr('alt')
    );
});

//otra forma
var $imags = $('img[alt]');
$imags.each(function(idx,el){
    console.log($(el).attr('alt'));
});




//Seleccionar el elemento input, luego dirigirse hacia el formulario y añadirle una clase al mismo

$input = $('input.input_text');
$input.closest('form').attr('class','nuevaClasedelForm'); //con addClass se puede mejor
        console.log($input.closest('form'));



//Seleccionar el ítem que posee la clase "current dentro de la lista #myList y
// remover dicha clase en el elemento;
// luego añadir la clase "current" al siguiente ítem de la lista.


var $current = $("#myList .current");

$current.removeClass("current");

var $next = $current.next('li');
$next.addClass("current");

// se puede en una linea


console.log($current);
console.log($next);

//Seleccionar el elemento select dentro de #specials; luego dirigirse hacia el botón submit.

var $submit = $("#specials select").closest('form').find('.input[type=submit]');
console.log($submit);

//Seleccionar el primer ítem de la lista en el elemento #slideshow;
// añadirle la clase "current" al mismo y luego añadir la clase "disabled" a los elementos hermanos.

$("#slideshow li:first").addClass('current').siblings().addClass('disabled');


//manipulacion
//1Añadir 5 nuevos ítems al final de la lista desordenada #myList.

//$('#myList:first').clone().appendTo('#myList').appendTo('#myList').appendTo('#myList').appendTo('#myList').appendTo('#myList');

var myItems = [], $myList = $('#myList');


for (var i=0; i<5; i++) {
    myItems.push('<li>list item ' + i + '</li>');
}

$myList.append(myItems.join(''));

//Remover los ítems impares de la lista.
$('#myList li:odd').remove();

//Añadir otro elemento h2 y otro párrafo al último div.module.

$('div.module').last().after('<div class="module" id="nuevo"></div>').append('');

//Añadir otra opción al elemento select; darle a la opción añadida el valor "Wednesday".

$('select[name=day]').append('option.....');

//Añadir un nuevo div.module a la página después del último;
// luego añadir una copia de una de las imágenes existentes dentro del nuevo div
$div = $('div.module').last();
var $new = $('</div>',{
    'class' : module,
    'id' : 'myModule'
});


$new.append($imgs.first().clone()).insertAfter();


});
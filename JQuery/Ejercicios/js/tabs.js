$(function(){
    'use strict';

    var $divs = $('div.module');
    $divs.hide();
    var $primero = $divs.first();

    console.log("divs");
    console.log($divs);
    console.log("primero");
    console.log($primero);



    var $nuevaUl = $('ul');
    var $myList = [];
    for (var i = $divs.length - 1; i >= 0; i--) {
        $myList.push('<li>item ' + i + '</li>');
    }
    $nuevaUl.append($myList.join(''));

    $primero.before($nuevaUl.clone());


    var $textosh2 =[];
    $divs.each(function(idx, el) {
    console.log(
        'El div ' + idx +
        'contiene el siguiente h2: ' +
        $(el).find('h2').text()
    );
    $textosh2.push($(el).find('h2').text());
});
    console.log($textosh2);

    var $i = 0;
    $myList.each(function(idx, el){
        $(el).text($textosh2[$i]);
    });
});

$(document).ready(function(){
    'use strict';

    var $modules = $('div module').hide();
    /*var $nav = $('<ul/> . {
        'id' : 'myTabs''}
);*/

 /*   $modules.each(function){
        var $module = $(this);
        var $title = $modules;
    };


    */

    $nav.append(lis).insertBefore($modules.eq(0));

    $(document).on('click', 'tabs li' , function (e){
        var $this = $(this);

        $this.addClass('current').siblings('.current').removeClass('current');
        $this.data('target').show().siblings('module').hide();
    });
});
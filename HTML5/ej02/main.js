$(function(){
    "use strict";


 var editor = document.getElementById ("edit");
            //editorDoc = editor.contentWindow.document;


document.designMode = 'on';


$("#edit").contentEditable=true;


$(document).on('click', '#bold', function(){


    document.execCommand('bold',false,null);
});







});
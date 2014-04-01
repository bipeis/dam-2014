$(function(){
    "use strict";


//actualizar progress


$(document).on('blur', 'input', function(){

    console.log(this);

    console.log(document.getElementById ("progress").value);


    if( this.value===""){}
        else{ document.getElementById ("progress").value++;}



    console.log(document.getElementById ("progress").value);
});






});
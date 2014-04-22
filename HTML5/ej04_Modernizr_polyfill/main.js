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



//Modernizr
console.log(Modernizr);

for (var i in Modernizr.inputtypes) {
    console.log(i + " : " + Modernizr.inputtypes[i]);
}

console.log("placeholder : " + Modernizr.input.placeholder);
console.log("progressbar : " + Modernizr.progressbar);

for (var i in Modernizr.video) {
    console.log(i + " : " + Modernizr.video[i]);
}

Modernizr.addTest({
test: Modernizr.input.placeholder,
//yep : 'geo.js',
nope: 'placeholder_polyfill.jquery.js'
});



});
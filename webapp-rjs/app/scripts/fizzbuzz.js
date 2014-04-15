define('fizzbuzz', [],function(){
    'use strict';

    var fizzbuzz = function(numero){
        console.log("fizzbuzz funcion");

        var lista=[];
        var msg='';
        for(var i=1;i<=numero;i++){
            msg='';
            if (!(i%3)) {
                msg+='Fizz';
            }
            if (!(i%5)) {
                msg+='Buzz';
            }
            if (i%3 && i%5) {
                msg=i;
            }
            lista[i-1]=msg;

                console.log("msg");
                console.log(msg);
                console.log(lista);
        }

        return lista;
    };

    return {
        fizzbuzz : fizzbuzz
    };

});

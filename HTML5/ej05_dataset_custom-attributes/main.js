$(function(){
    "use strict";

    var users = $('.user');
    console.log(users);
    users.each(function(index){
        console.log(users[index]);
        console.log(users[index].dataset.name);
        console.log(users[index].dataset.city);
        console.log(users[index].dataset.lang);
        console.log(users[index].dataset.food);
        console.log(users[index].dataset.delete);

        if(users[index].dataset.lang=="es"){
            users[index].setAttribute("data-lang","es_ES");
            console.log("cambiado es");
        }


         console.log(users[index].dataset.lang);

        if(users[index].dataset.delete=="true"){
            users[index].dataset.name=null;
            users[index].dataset.city=null;
            users[index].dataset.lang=null;
            users[index].dataset.food=null;
            users[index].dataset.delete=null;

            console.log("eliminados");


        console.log(users[index].dataset.name);
        console.log(users[index].dataset.city);
        console.log(users[index].dataset.lang);
        console.log(users[index].dataset.food);
        console.log(users[index].dataset.delete);
        }
    });

});
var APP = APP||{};
APP.Pedir = (function(){
    "use strict";

    var getInfo = function(devolverInfo, retoInfo){
        $.ajax({
                url : retoInfo,
                cache : false,
                dataType : 'json',
                success : devolverInfo,
                error : errorAjax
        });
    };

    var errorAjax = function(jqXHR, textStatus, errorThrown){
        console.log(errorThrown);
    };


    return{
        getInfo : getInfo
    };

})();
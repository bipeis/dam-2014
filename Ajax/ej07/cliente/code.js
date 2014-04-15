$(function(){

        $.ajax({
                url : '../servidor/cargaProvinciasJSON.php',
                cache : false,
                contentType: "application/json",
                success : function(data, status,jqXHR){
                    console.log("jqXHR");
                    console.log(jqXHR);
                    var respuesta = JSON.parse(jqXHR.responseText);
                    console.log(respuesta);


                    for(var i in respuesta) {
                        console.log(respuesta[i]);

                        document.getElementById("provinciasops").innerHTML+='<option>'+ respuesta[i]+ '</option>';
                    }
                },
                error : function(jqXHR, status, error) {
                    console.log(error);
                }
            });



    $(document).on('change', $("#provinciasops"), function(e){
        console.log($("#municipios"));
        $("#municipios")[0].options.length = 0;
        //$municipios.html('');

        $.ajax({
            url : '../servidor/cargaMunicipiosJSON.php', //Es relativa al html y no al js
            data : { provincia : $("#provinciasops").val()},
            type : 'POST',
            dataType : 'json',
            success : function(data, textStatus, jqXHR){
                for(var prop in data){

                    elemento = new Option(data[prop],prop);
                    $("#municipios")[0].options.add(elemento);

                }
            }
        });
    });

});
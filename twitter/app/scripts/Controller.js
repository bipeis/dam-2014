define ('Controller',['Data','Service'],function(DB, srv){
    'use strict';

    var getTweetsFromTwitter= function(){
        srv.getTweets({}, processTweets, error);
    };

    var processTweets = function(data){
        var tweets =[];

        if(data && data.statuses && data.statuses.length >0){
            for (var i = data.statuses.length - 1; i >= 0; i--) {
                console.log(data.statuses[i]);
            };
        }

    };

    var error =  function(){

    };

    return{
        getTweetsFromTwitter : getTweetsFromTwitter
    };
});
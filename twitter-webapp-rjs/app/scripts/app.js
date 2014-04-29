define(['Controller','Lungo'], function(Controller,Lungo) {
    'use strict';

    console.log('App started');

    var init = function(){

        Lungo.init({
        });

        Controller.getTweetsFromTwitter();

        Controller.showLatestTweets();

    };




    $(function(){
        init();
    });

});
define('Controller',['Data', 'Service','UI'],function(DB,srv,UI){
    'use strict';

    var getTweetsFromTwitter = function(success, error){
        srv.getTweets({},function(data){
            processTweets(data, function(tweets){
                DB.addTweets(tweets, success, error);
                UI.showTweetsList(tweets);
            }, error);
        }, error);
    };

    var processTweets = function(data, success, error){
        var tweets=[];
        var tweet;
        if(data && data.statuses && data.statuses.length >0){
            for (var i = data.statuses.length - 1; i >= 0; i--) {
                tweet ={
                    id : data.statuses[i].id_str,
                    text : data.statuses[i].text,
                    date : new Date(data.statuses[i].created_at),
                    user : data.statuses[i].user.name,
                    image : data.statuses[i].user.user_profile_image_url
                };
                tweets.push(tweet);
            }
        }
        success(tweets);
    };
    var error = function(){

    };

    var showLatestTweets = function(){

        DB.getAllTweets(function(tweets){
            UI.showTweetsList(tweets);
        },error);
    };



    return{
        getTweetsFromTwitter : getTweetsFromTwitter,
        showLatestTweets : showLatestTweets
    };
});
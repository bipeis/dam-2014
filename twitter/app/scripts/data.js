define('data',['ydn-db'], function() {
    'use strict';

    console.log("data");
    var db = new ydn.db.Storage('twitter-db');

    var addTweet = function(tweet,success,error){

        var req = db.put({name: 'tweets', keyPath: 'id'}, tweet);
       /* req.done(function(key) {

        });
        */
        console.log(req);
        req.done(success(req.key));
        req.fail(error);

    };
    var addTweets = function(tweets,success,error){

        var req = db.put('tweets', tweets);

        req.done(success);
        req.fail(error);

    };

    var getTweet = function(tweet,success,error){

        var req = db.get('tweets', '1');
        req.done(success);
        req.fail(error);

    };

    var getAllTweets = function(success,error){

        var req = db.values('tweets').done(function(records) {
            console.log(records);
        });
        req.done(success);
        req.fail(error);

    };

    var deleteTweet = function(tweet,success,error){

        var req = db.clear('tweets', ydn.db.KeyRange.starts(tweet));
        req.done(success);
        req.fail(error);

    };
    return {
        addTweet : addTweet,
        addTweets : addTweets,
        getTweet : getTweet,
        getAllTweets : getAllTweets,
        deleteTweet : deleteTweet
    };
});


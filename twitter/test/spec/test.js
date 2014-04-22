/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl : '../app/scripts/',
        paths :{
            'ydn-db': '../bower_components/ydn-db/jsc/ydn.db-dev',
        },
        shim: {
            'ydn-db': {
                exports: 'ydn'
            },
        }
    });

    describe('Database module', function () {
        var DB;

        beforeEach(function(done){
            require(['Data'], function(Data){
                DB=Data;
                done();
            });
        });

        //after(function(done){

        //});

        describe('#put method', function () {
            it('Add some tweets', function (done) {
                var tweet ={
                    'id' :'8423375524',
                    'text' : 'hola'
                };
                var tweets =[
                    /*{
                        'id' :'3423375524',
                        'text' : 'hola'
                    },
                    {
                        'id' :'1',
                        'text' : 'hola2'
                    }*/
                ];
                DB.addTweet(tweet,function(key){
                    console.log('key');
                    console.log(key);
                    assert.equal('8423375524',key);
                    done();
                },
                function(err){
                    throw err;
                });


                DB.addTweets(tweets,function(){
                    done();
                },
                function(err){
                    throw err;
                });


                DB.getTweet(tweet,function(record){
                    console.log(record);
                    done();
                },
                function(err){
                    throw err;
                });

                DB.getAllTweets(function(record){
                    console.log(record);
                    done();
                },
                function(err){
                    throw err;
                });

                DB.deleteTweet('1',function(){
                    console.log('deleted');
                    done();
                },
                function(err){
                    throw err;
                });
            });
        });
    });
})();

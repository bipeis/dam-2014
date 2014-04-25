(function () {
    'use strict';

    require.config({
        baseUrl : '../app/scripts/',
        paths : {
            // pouchdb  : '../bower_components/pouchdb/dist/pouchdb-nightly',
            jquery: '../bower_components/jquery/dist/jquery'
            //'ydn-db' : '../bower_components/ydn-db/jsc/ydn.db-dev',
        },
        shim : {

            //'ydn-db': {
            //    exports : 'ydn'
            //}
        }
    });

    describe('Events module', function () {
        //var ui;
        var $;
        var evnts;
        var DB;
        var cntrl;

        beforeEach(function(done){
            require(['Events','jquery', 'Data','Controller'], function(eventos,jquery,Data,Controller){
                evnts = eventos;
                $ = jquery;
                DB = Data;
                cntrl = Controller;

                done();
            });
        });

        describe('#eventosAddTweets', function () {
            it('Controller.showtweets has been called',function (done){
                var error = function(){

                };
                var success = function(){
                    console.log('assert');
                    //console.log(e.toElement);
                    assert.isTrue(cntrl.showLatestTweets.calledOnce);
                };
                DB.addTweets([], success(), error);

                done();
            });

            it('Event datachange is fired',function(done){
                var errTimeout = setTimeout(function(){
                    assert(false, 'Event never fired');
                    done();
                },1000);

                $(document).on('datachange',function(){
                    clearTimeout(errTimeout);
                    assert(true);
                    done();
                });
                document.dispatchEvent(new Event('datachange'));
            });


        });

    });
})();
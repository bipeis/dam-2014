/* global describe, it */

(function () {
    'use strict';

    require.config({
        baseUrl : '../app/scripts',
        paths :{
            'jquery': '../bower_components/jquery/dist/jquery',
        },
        shim: {
            //'ydn-db': {
            //    exports: 'ydn'
          //  },
        }
    });

    describe('Controller module', function () {
        var ctrl;

        beforeEach(function(done){
            require(['Controller'], function(Controller){
                ctrl=Controller;
                sinon.spy('Controller','getTweetsFromTwitter');
                done();
            });
        });

        afterEach(function(done){
            ctrl.getTweetsFromTwitter.restore();
            done();
        });

        describe('#ControllergetTweets', function () {
            it('Controller.getTweetsFromTwitter has been called', function(done){

                ctrl.getTweetsFromTwitter();
                assert.isTrue(ctrl.getTweetsFromTwitter.calledOnce);
            });

        });


    });
})();
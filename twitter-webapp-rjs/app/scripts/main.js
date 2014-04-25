require.config({
    paths: {
        pouchdb: '../bower_components/pouchdb/dist/pouchdb-nightly',
        'ydn-db': '../bower_components/ydn-db/jsc/ydn.db-dev',
        handlebars: '../bower_components/handlebars.js/dist/handlebars',
        lungo: '../bower_components/lungo/lungo',
        quo: [
            'https://raw.githubusercontent.com/arkaitzgarro/EarthQuakeLungo/master/js/vendor/quo.debug',
            '../bower_components/quojs/quo'
        ]
    },
    shim: {
        pouchdb: {
            exports : 'PouchDB'
        },
        'ydn-db': {
            exports : 'ydn'
        },
        quo:{
            exports : '$$'
        },
        lungo: {
            deps :[
                'quo'
            ],
            exports : 'Lungo'
        },
        handlebars: {
            exports : 'Handlebars'
        }
    }
});

require(['app'], function () {});

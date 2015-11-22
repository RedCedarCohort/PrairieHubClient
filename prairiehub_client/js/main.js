require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        marionette: {
            deps: [
                'underscore',
                'backbone',
                'jquery'
            ],
            exports: "Marionette"
        },
    },
    paths: {
        jquery: 'libs/jquery-2.1.4.min',
        backbone: 'libs/backbone-min',
        underscore: 'libs/underscore-min',
        marionette: 'libs/backbone.marionette.min',
        // used to import templates as AMD plugins
        text: 'libs/requirejs-text'
    }
});

require([ 'app', 'backbone', 'router']
    , function (App, Backbone, Router) {
        console.log("stuff...");
    });
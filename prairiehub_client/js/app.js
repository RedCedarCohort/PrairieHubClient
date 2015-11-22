define([
            'jquery'
            , 'underscore'
            , 'backbone'
            , 'marionette'
            , 'declaration'
            , 'controller'
            , 'initializer'
], function (
                $, _, Backbone, Marionette
                , Declaration
                , AppController
                , AppInitilizer
            ) {

    console.log("app.js");
    
    Declaration.MyApp.start();
});

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

    Declaration.MyApp.start();
});

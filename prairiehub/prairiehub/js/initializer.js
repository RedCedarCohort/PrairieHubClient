define([
            'jquery'
            , 'underscore'
            , 'backbone'
            , 'marionette'
            , 'declaration'
            , 'controller'
            , 'router'
], function (
                $, _, Backbone, Marionette
                , Declaration
                , AppController
                , Router
            ) {

    Declaration.MyApp.addInitializer(function () {
        Declaration.MyApp.addRegions({
            contentRegion: "#content"
        });

        Declaration.MyApp.AppController = new AppController();
        Declaration.MyApp.Router = new Router();

        Backbone.history.start();
    });
});
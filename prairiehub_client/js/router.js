define([
    'jquery'
    , 'underscore'
    , 'backbone'
    , 'declaration'
    , 'controller'
    , 'models/CustomUserModel'
], function ($, _, Backbone, Declaration, Controller, CustomUserModel) {

    var Router = Backbone.Router.extend({
        routes: {
            '': 'showIndex'
            , 'login': 'showLogin'
            , 'loginCustom': 'performLogin'
        }
        , showIndex: function () {
            console.log("router: showIndex");
            Declaration.MyApp.AppController.showIndex();
        }
        , showLogin: function () {
            console.log("router: showLogin");
            Declaration.MyApp.AppController.showLogin(); 
        }
    });

    return Router;
});
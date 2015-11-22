define([
    'jquery'
    , 'underscore'
    , 'backbone'
    , 'declaration'
    , 'controller'
], function ($, _, Backbone, Declaration, Controller) {

    var Router = Backbone.Router.extend({
        routes: {
            '': 'showIndex'
            , 'login': 'showLogin'
            , 'showUser/:id': 'showUserInfo'
        }
        , showIndex: function () {
            console.log("router: showIndex");
            Declaration.MyApp.AppController.showIndex();
        }
        , showLogin: function () {
            console.log("router: showLogin");
            Declaration.MyApp.AppController.showLogin(); 
        }
        , showUserInfo: function(id){
            console.log("router: showUser");
            Declaration.MyApp.AppController.showUserInfo(id);
        }
    });

    return Router;
});
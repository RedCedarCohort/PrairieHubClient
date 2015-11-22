define([
            'jquery'
            , 'underscore'
            , 'backbone'
            , 'marionette'
            , 'declaration'
            , 'views/loginView'
            , 'views/homeView'
            , 'views/loginSuccessView'
], function (
                $, _, Backbone, Marionette
                , Declaration
                , LoginView
                , HomeView
            ) {

    var AppController = Marionette.Object.extend({
        initialize: function () {

        },
        showIndex: function () {
            console.log("Controller: showIndex");
            Declaration.MyApp.contentRegion.show(new HomeView());
        },
        showLogin: function () {
            console.log("Controller: showLogin");
            Declaration.MyApp.contentRegion.show(new LoginView());
        },
        showLoginSuccess: function () {
            console.log("Controller: performLogin");
            Declaration.MyApp.contentRegion.show(new LoginSuccess());
        }
    });

    return AppController;
});
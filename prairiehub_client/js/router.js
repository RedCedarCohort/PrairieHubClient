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
        //, performLogin: function () {
        //    console.log("router: performLogin");
        //    var user = new UserModel();
        //    var email = getParameterByName("email");
        //    console.log("EMAIL: " + email);
        //    user.set("email", encodeURIComponent(email));
        //    console.log(user);

        //    //have it fetch here....
        //    console.log("...fetching....");

        //    if (user.uid && user.uid > 0) {
        //        Declaration.MyApp.AppController.showLoginSuccess(user);
        //    }
        //    else {
        //        Declaration.MyApp.AppController.showLogin();
        //    }
        //}
    });

    return Router;
});
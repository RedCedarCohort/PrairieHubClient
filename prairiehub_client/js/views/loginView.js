define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'declaration',
    'models/customUserModel',
    'text!templates/loginTemplate.html',
], function ($, _, Backbone, Marionette, Declaration, CustomUserModel, LoginTemplate) {

    var LoginView = Marionette.ItemView.extend({
        template: _.template(LoginTemplate)
        , events: {
            "click #btnCustomLogin": "login"
        }
        , login: function(){
            var email = $("#userCustomEmail").val();
            var pwd = $("#userCustomPassword").val();
            var user = new CustomUserModel({ "email": email, "pwd": pwd });

            $.when(user.fetch()).done(function () {
                Declaration.MyApp.AppController.showUserInfo(user.get("id"));
            });

            //test@test.com
            //temp
        }
    });

    return LoginView;
});
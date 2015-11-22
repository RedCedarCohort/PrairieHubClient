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
            console.log(user);

            $.when(user.fetch()).done(function () {
                console.log(user);
            });

            //test@test.com
            //temp
        }
    });

    return LoginView;
});
define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'declaration',
    'text!templates/loginSuccessTemplate.html'
], function ($, _, Backbone, Marionette, Declaration, LoginSuccess) {

    var LoginSuccessView = Marionette.ItemView.extend({
        template: _.template(LoginSuccess)
    });

    return LoginSuccessView;
});
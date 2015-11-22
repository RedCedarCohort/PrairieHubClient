define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'declaration',
    'text!templates/userInfoTemplate.html'
], function ($, _, Backbone, Marionette, Declaration, UserInfo) {

    var UserInfoView = Marionette.ItemView.extend({
        template: _.template(UserInfo)
    });

    return UserInfoView;
});
define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'declaration',
    'text!templates/homeTemplate.html'
], function ($, _, Backbone, Marionette, Declaration, HomeTemplate) {

    var HomeView = Marionette.ItemView.extend({
        template: _.template(HomeTemplate)
    });

    return HomeView;
});
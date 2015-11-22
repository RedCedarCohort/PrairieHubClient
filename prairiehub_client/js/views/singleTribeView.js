define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'declaration', 
    'text!templates/tribeDetailsTemplate.html'
], function ($, _, Backbone, Marionette, Declaration, TribeDetails) {

    var SingleTribeView = Marionette.ItemView.extend({
        template: _.template(TribeDetails)
    });

    return SingleTribeView;
});
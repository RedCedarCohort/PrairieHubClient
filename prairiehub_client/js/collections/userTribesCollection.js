define([
    'jquery',
    'underscore',
    'backbone',
    'models/tribeModel'
], function ($, _, Backbone, TribeModel) {

    var UserTribesCollection = Backbone.Collection.extend({
        model: TribeModel
    });
    
    return UserTribesCollection;
});
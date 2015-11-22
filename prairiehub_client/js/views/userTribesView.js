define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'declaration',
    'views/singleTribeView'
], function ($, _, Backbone, Marionette, Declaration, SingleTribeView ) {

    var UserTribesView = Marionette.CollectionView.extend({
        childView: SingleTribeView
    });

    return UserTribesView;
});
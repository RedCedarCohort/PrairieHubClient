define([
            'jquery'
            , 'underscore'
            , 'backbone'
            , 'marionette'
], function ($, _, Backbone, Marionette) {
    var myApp = new Marionette.Application();
    
    return {
        MyApp: myApp
    };
});

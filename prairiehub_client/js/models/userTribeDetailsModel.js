define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {

    var UserTribesModel = Backbone.Model.extend({
        url: function () {
            return "http://10.185.0.87:5000/api/user/" + this.get("id") + "/tribes";
        }
        , defaults: {
            id: ""
        }
    });
    
    return UserTribesModel;
});
define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {

    var UserInfoModel = Backbone.Model.extend({
        url: function () {
            return "http://10.185.0.87:5000/api/user/" + this.get("id");
        }
        , defaults: {
            id: ""
        }
    });
    
    return UserInfoModel;
});
define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {

    var CustomUserModel = Backbone.Model.extend({
        url: function () {
            return "http://10.185.0.87:5000/login/custom/" + this.get("email") + "/" + this.get("pwd");
        }
        , defaults: {
            id: ""
        }
        , initialize: function () {
            $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
                options.crossDomain = {
                    crossDomain: true
                };
                options.xhrFields = {
                    withCredentials: true
                };
            });
        }
    });
    
    return CustomUserModel;
});
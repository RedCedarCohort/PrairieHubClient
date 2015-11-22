define([
            'jquery'
            , 'underscore'
            , 'backbone'
            , 'marionette'
            , 'declaration'
            , 'models/userInfoModel'
            , 'views/loginView'
            , 'views/homeView'
            , 'views/userInfoView'
], function (
                $, _, Backbone, Marionette
                , Declaration
                , UserInfo
                , LoginView
                , HomeView
                , UserInfoView
            ) {

    var AppController = Marionette.Object.extend({
        initialize: function () {

        },
        showIndex: function () {
            console.log("Controller: showIndex");
            Declaration.MyApp.contentRegion.show(new HomeView());
        },
        showLogin: function () {
            console.log("Controller: showLogin");
            Declaration.MyApp.contentRegion.show(new LoginView());
        },
        showUserInfo: function (id) {
            console.log("Controller: showUserInfo");
            var user = new UserInfo({"id":id});
            $.when(user.fetch()).done(function(){
                console.log(user);
                Declaration.MyApp.contentRegion.show(new UserInfoView({ model: user }));
            });
        }
    });

    return AppController;
});
define([
            'jquery'
            , 'underscore'
            , 'backbone'
            , 'marionette'
            , 'declaration'
            , 'models/userInfoModel'
            , 'models/userTribeDetailsModel'
            , 'collections/userTribesCollection'
            , 'views/loginView'
            , 'views/homeView'
            , 'views/userInfoView'
            , 'views/userTribesView'
], function (
                $, _, Backbone, Marionette
                , Declaration
                , UserInfo
                , UserTribeModel
                , UserTribesCollection
                , LoginView
                , HomeView
                , UserInfoView
                , UserTribesView
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
                
                Declaration.MyApp.contentRegion.show(new UserInfoView({ model: user }));
                console.log(user);
                
                var tribes = new UserTribeModel({"id":"1"});  //new UserTribesCollection();
                
                $.when(tribes.fetch()).done(function(){
                    console.log("show tribes on user page");
                    
                    var tribeInfos = tribes.get("objects");
                    console.log(tribeInfos);
                    
                    var col = new UserTribesCollection(tribeInfos);
                    var view = new UserTribesView({collection: col});
                    
                    console.log(view);
                    Declaration.MyApp.userTribeRegion.reset();
                    Declaration.MyApp.userTribeRegion.show(view);
                });
            });
        }
    });

    return AppController;
});
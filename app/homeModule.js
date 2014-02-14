app.module("HomeModule", function(HomeModule, app){
  HomeModule.homeTemplate =  "<div>Home</div>";

  HomeModule.HomeView = Marionette.ItemView.extend({
    template: _.template(HomeModule.homeTemplate),
    className: 'content home'
  });

  HomeModule.Controller = Marionette.Controller.extend({
    displayHome: function() {
      app.content.show(new HomeModule.HomeView());
    }
  });

  HomeModule.addInitializer(function() {
    HomeModule.controller = new HomeModule.Controller();
  });

  HomeModule.onStart = function() {
    HomeModule.controller.displayHome();
  };

  HomeModule.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "home": "displayHome"
    }
  });

  HomeModule.addInitializer(function() {
    new HomeModule.Router({
      controller: HomeModule.controller
    })
  });
});
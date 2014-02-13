app.module("ContentModule", function(ContentModule, app){
  ContentModule.listTemplate =  "<div>List</div>";
  ContentModule.homeTemplate =  "<div>Home</div>";

  ContentModule.ListView = Marionette.ItemView.extend({
    template: _.template(ContentModule.listTemplate),
    className: 'content list'
  });

  ContentModule.HomeView = Marionette.ItemView.extend({
    template: _.template(ContentModule.homeTemplate),
    className: 'content home'
  });

  ContentModule.Controller = Marionette.Controller.extend({
    displayList: function() {
      app.content.show(new ContentModule.ListView());
    },

    displayHome: function() {
      app.content.show(new ContentModule.HomeView());
    }
  });

  ContentModule.addInitializer(function() {
    ContentModule.controller = new ContentModule.Controller();
  });

  ContentModule.onStart = function() {
    ContentModule.controller.displayList();
  };

  ContentModule.Router = Marionette.AppRouter.extend({
    appRoutes: {
      list: "displayList",
      home: "displayHome"
    }
  });

  ContentModule.addInitializer(function() {
    new ContentModule.Router({
      controller: ContentModule.controller
    })
  });
});
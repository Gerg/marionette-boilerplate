app.module("ContentModule", function(ContentModule, app){
  ContentModule.listTemplate =  "<div>List</div>";
  ContentModule.showTemplate =  "<div>Show <%= id %></div>";

  ContentModule.ListView = Marionette.ItemView.extend({
    template: _.template(ContentModule.listTemplate),
    className: 'content list'
  });

  ContentModule.ShowView = Marionette.ItemView.extend({
    template: _.template(ContentModule.showTemplate),
    className: 'content show'
  });

  ContentModule.Controller = Marionette.Controller.extend({
    displayList: function() {
      app.content.show(new ContentModule.ListView());
    },

    displayShow: function(id) {
      app.content.show(new ContentModule.ShowView({
        model: new Backbone.Model({id: id})
      }));
    }
  });

  ContentModule.addInitializer(function() {
    ContentModule.controller = new ContentModule.Controller();
  });

  ContentModule.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "list": "displayList",
      "show/:id": "displayShow"
    }
  });

  ContentModule.addInitializer(function() {
    new ContentModule.Router({
      controller: ContentModule.controller
    })
  });
});
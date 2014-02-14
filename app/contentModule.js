app.module("ContentModule", function(ContentModule, app){
  ContentModule.itemTemplate =  "Item";
  ContentModule.listTemplate =  "<div>List</div><ul></ul>";
  ContentModule.showTemplate =  "<div>Show <%= id %></div>";

  ContentModule.ItemView = Marionette.ItemView.extend({
    template: _.template(ContentModule.itemTemplate),
    tagName: 'li',
  });

  ContentModule.ListView = Marionette.CompositeView.extend({
    template: _.template(ContentModule.listTemplate),
    className: 'content list',
    itemView: ContentModule.ItemView,
    itemViewContainer: 'ul'
  });

  ContentModule.ShowView = Marionette.ItemView.extend({
    template: _.template(ContentModule.showTemplate),
    className: 'content show'
  });

  ContentModule.Controller = Marionette.Controller.extend({
    displayList: function() {
      app.content.show(new ContentModule.ListView({
        collection: new Backbone.Collection([{1:1},{2:2},{3:3}])
      }));
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
app.module("ContentModule", function(ContentModule, app){
  ContentModule.viewTemplate =  "<div>Content</div>";

  ContentModule.View = Marionette.ItemView.extend({
    template: _.template(ContentModule.viewTemplate),
    className: 'content'
  });

  ContentModule.Controller = Marionette.Controller.extend({
    showView: function() {
      app.content.show(new ContentModule.View());
    }
  });

  ContentModule.addInitializer(function() {
    ContentModule.controller = new ContentModule.Controller();
  });

  ContentModule.onStart = function() {
    ContentModule.controller.showView();
  }
});
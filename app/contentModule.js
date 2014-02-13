app.module("ContentModule", function(ContentModule, app){
  ContentModule.viewTemplate =
    "<div class='content vCenterWrap'>" +
      "<div class='vCenterContent'>Content</div>" +
      "</div>"

  ContentModule.View = Marionette.ItemView.extend({
    template: ContentModule.viewTemplate
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
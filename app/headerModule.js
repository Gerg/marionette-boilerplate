app.module("HeaderModule", function(HeaderModule, app){
  HeaderModule.viewTemplate =
    "<div class='header vCenterWrap'>" +
      "<div class='vCenterContent'>Header</div>" +
      "</div>"

  HeaderModule.View = Marionette.ItemView.extend({
    template: HeaderModule.viewTemplate
  });

  HeaderModule.Controller = Marionette.Controller.extend({
    showView: function() {
      app.header.show(new HeaderModule.View());
    }
  });

  HeaderModule.addInitializer(function() {
    HeaderModule.controller = new HeaderModule.Controller();
  });

  HeaderModule.onStart = function() {
    HeaderModule.controller.showView();
  }
});
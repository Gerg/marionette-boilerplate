app.module("HeaderModule", function(HeaderModule, app){
  HeaderModule.viewTemplate = "<div class='vCenter'>Header</div>";

  HeaderModule.View = Marionette.ItemView.extend({
    template: _.template(HeaderModule.viewTemplate),
    className: 'header'
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
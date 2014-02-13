app.module("HeaderModule", function(HeaderModule, app){
  HeaderModule.viewTemplate = "<div class='vCenter'>" +
      "<div class='headerText'>Header</div>" +
      "<a href='#home' class='navButton'>Home</a>" +
      "<a href='#list' class='navButton'>List</a>" +
    "</div>";

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
app.module("FooterModule", function(FooterModule, app){
  FooterModule.viewTemplate = "<div class='vCenter'>Footer</div>";

  FooterModule.View = Marionette.ItemView.extend({
    template: _.template(FooterModule.viewTemplate),
    className: 'footer'
  });

  FooterModule.Controller = Marionette.Controller.extend({
    showView: function() {
      app.footer.show(new FooterModule.View());
    }
  });

  FooterModule.addInitializer(function() {
    FooterModule.controller = new FooterModule.Controller();
  });

  FooterModule.onStart = function() {
    FooterModule.controller.showView();
  }
});
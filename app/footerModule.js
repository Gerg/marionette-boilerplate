app.module("FooterModule", function(FooterModule, app){
  FooterModule.viewTemplate =
    "<div class='footer vCenterWrap'>" +
      "<div class='vCenterContent'>Footer</div>" +
      "</div>"

  FooterModule.View = Marionette.ItemView.extend({
    template: FooterModule.viewTemplate
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
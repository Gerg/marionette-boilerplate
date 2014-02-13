window.app = new Marionette.Application();

app.addRegions({
  header: ".headerRegion",
  content: ".contentRegion",
  footer: ".footerRegion"
});

app.onInitializeAfter = function() {
  Backbone.history.start();
};
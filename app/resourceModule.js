app.module("ResourceModule", function(ResourceModule, app){
  var colorsCollection,
    Color = Backbone.Model.extend({
      initialize: function(){
        this.set('hex', this.generateRandomHexColor());
      },

      generateRandomHexColor: function(){
        return '#' + Math.floor(Math.random()*16777215).toString(16);
      }
    });

  var requestAllColors = function(){
    return colorsCollection;
  };

  var requestColor = function(cid){
    return colorsCollection.get(cid);
  };

  app.reqres.setHandlers({
    'color:all' : requestAllColors,
    'color' : requestColor
  });

  ResourceModule.addInitializer(function(){
    colorsCollection = new Backbone.Collection([{},{}], { model: Color });
  });

});

app.module("ContentModule", function(ContentModule, app){
  ContentModule.itemTemplate =  "<div class='color-block' style='background-color: <%= hex %>;'>" +
                                  "<a href='#show/<%= cid %>' class='visibility-text'> <%= hex %> </a>"
                                "</div>";
  ContentModule.listTemplate =  "<div>Colors: </div><ul class='list-unstyled'></ul>";
  ContentModule.showTemplate =  "<div class='visibility-text'> Show: <%= hex %></div>";

  ContentModule.ItemView = Marionette.ItemView.extend({
    template: _.template(ContentModule.itemTemplate),
    tagName: 'li',
    templateHelpers: function(){
      return {
        cid: this.model.cid
      };
    }
  });

  ContentModule.ListView = Marionette.CompositeView.extend({
    template: _.template(ContentModule.listTemplate),
    className: 'content list',
    itemView: ContentModule.ItemView,
    itemViewContainer: 'ul'
  });

  ContentModule.ShowView = Marionette.ItemView.extend({
    template: _.template(ContentModule.showTemplate),
    className: 'content show',

    onShow: function(){
      this.$el.css('background-color', this.model.get('hex'));
    }
  });

  ContentModule.Controller = Marionette.Controller.extend({
    displayList: function() {
      app.content.show(new ContentModule.ListView({
        collection: app.request('color:all')
      }));
    },

    displayShow: function(id) {
      app.content.show(new ContentModule.ShowView({
        model: app.request('color', id)
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

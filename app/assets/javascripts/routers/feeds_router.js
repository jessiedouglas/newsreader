NewsReader.Routers.FeedsRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "index",
    "feeds/:id": "show"
  },

  index: function () {
    var indexView = new NewsReader.Views.FeedsIndex({
      collection: NewsReader.feeds
    });

    this._swapView(indexView);
  },

  show: function (id) {

  },

  _swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this.currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }
})